import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { IResponseCollection, IResponseModel } from '../interfaces/core.interface';

import { throwError as observableThrowError, Observable } from 'rxjs';
import { MessagesService } from './messages.service';


@Injectable({
    providedIn: 'root'
})
export class AbstractHttpService {

    protected __queryParams: [{ [key: string]: string | number }] = [] as any;

    constructor(
        public _route: ActivatedRoute,
        public _messagesService: MessagesService,
        protected _injector: Injector,
        protected _http: HttpClient,
        protected _router: Router,
    ) { }

    public setQueryParam(name: string, value: string | number): void {
        const index = this.__queryParams.findIndex((qParam: any, index: number) => {
            return (name === qParam.name);
        });

        if (index === -1) {
            this.__queryParams.push({
                name: name,
                value: value
            });
        } else {
            this.__queryParams[index]['value'] = value;
        }
    }

    public clearFilters(): void {
        this.__queryParams = <any>[];
    }

    public removeQueryParam(name: string): void {
        const index = this.__queryParams.findIndex((qParam: any, index: number) => {
            return (name === qParam.name);
        });

        if (index > -1) {
            this.__queryParams.splice(index, 1);
        }
    }

    protected _handleError(error: any, keepAfterNavigationChange?: boolean): Observable<any> {
        this._messagesService.dismissLoading();
        
        let message: string = '';
        if (error.error && error.error.errorMessage) {
            message = error.error.errorMessage;
        }

        if (error.status >= 500) {
            this._messagesService.presentAlertAccept(message);

        } else {
            switch (error.status) {
                case 404:
                    this._messagesService.presentAlertAccept(message || 'Recurso no encontrado.');
                    break;

                case 403:
                    this._messagesService.presentAlertAccept(message || 'No tienes permisos para acceder a esta página.');
                    break;

                case 401:
                    this._messagesService.presentAlertAccept(message || 'No autorizado.');
                    break;

                case 400:
                    this._messagesService.presentAlertAccept(message || 'Solicitud incorrecta, los parámetros enviados no son correctos.');
                    break;

                default:
                    // this._messagesService.presentAlert(message || 'No se ha podido establecer conexión con el servidor.Verifique la conexión a internet.');
                    break;
            }
        }
        return observableThrowError({ errorCode: error.status, errorMessage: message, error });
    }

    protected _parseResponseModel(response: IResponseModel) {
        if (response.data && response.data['items']) {
            return response.data['items'][0];
        }
        return response.data || response;
    }

    protected _parseResponseCollection(response: IResponseCollection) {
        return response.data.items || response.data || response;
    }

}
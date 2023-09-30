import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { AbstractHttpService } from './abstract-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from './messages.service';
import { IResponseCollection, IResponseModel } from '../interfaces/core.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends AbstractHttpService {

  private _headers: any;

  constructor(
    _route: ActivatedRoute,
    _messagesService: MessagesService,
    _injector: Injector,
    _http: HttpClient,
    _router: Router,
  ) {
    super(_route, _messagesService, _injector, _http, _router);
    this.initialize();
  }

  public initialize() {
  }


  /**
   * Método get
   * @param url url base
   * @returns datos de la petición
   */
  public get(url: string) {
    return this._http.get(url, { headers: this._headers })
      .pipe(
        map((response: any) => <IResponseCollection>response),
        catchError((error: any) => {
          return this._handleError(error);
        })
      );
  }

  /**
   * Método get By Id
   * @param url url base
   * @returns datos de la petición
   */
  public getById(url: string) {
    return this._http.get(url, { headers: this._headers })
      .pipe(
        map((response: any) => <IResponseModel>response),
        catchError((error: any) => {
          return this._handleError(error);
        })
      );
  }

  /**
   * Método post
   * @param url url base
   * @returns datos de la petición
   */
  public post(url: string, body: any) {
    return this._http.post(url, body, { headers: this._headers })
      .pipe(
        map((response: any) => <IResponseModel>response),
        catchError((error: any) => {
          return this._handleError(error);
        })
      );
  }

  /**
   * Método put
   * @param url url base
   * @returns datos de la petición
   */
  public put(url: string, body: any) {
    return this._http.put(url, body, { headers: this._headers })
      .pipe(
        map((response: any) => <IResponseModel>response),
        catchError((error: any) => {
          return this._handleError(error);
        })
      );
  }

  /**
   * Método delete
   * @param url url base
   * @returns datos de la petición
   */
  public delete(url: string) {
    return this._http.delete(url, { headers: this._headers })
      .pipe(
        map((response: any) => <IResponseModel>response.data),
        catchError((error: any) => {
          return this._handleError(error);
        })
      );
  }

}
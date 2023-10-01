import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ILocalizaciones, IResultsL } from 'src/app/core/interfaces/localizaciones.interface';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionesInfoService {

  private destroyed$ = new Subject<void>();

  constructor(
    private _httpService: HttpService,
  ) { }

  public destroy() {
    this.destroyed$.next();
  }

  /**
   * Método para obtener el listado de localizaciones
   * @returns información del listado de localizaciones
   */
  public getLocalizacionesInfo() {

    return new Promise<any>(async (resolve, reject) => {

      const url = "https://rickandmortyapi.com/api/location";

      this._httpService.get(url).pipe(takeUntil(this.destroyed$)).subscribe({

        next: async (result: ILocalizaciones) => {

          if (result) {
            resolve(result);
          } else {
            reject(false);
          }

        },
        error: (error: any) => {
          reject(error);
        }

      });

    });
  }

  /**
   * Solicitar una localización a partir de un identificador
   * @returns Una única localización a partir de un identificador
   */
  public getLocalizacionInfo(locationId: number) {

    return new Promise<any>(async (resolve, reject) => {

      const url = `https://rickandmortyapi.com/api/location/${locationId}`;

      this._httpService.get(url).pipe(takeUntil(this.destroyed$)).subscribe({

        next: async (result: IResultsL) => {

          if (result) {
            resolve(result);
          } else {
            reject(false);
          }

        },
        error: (error: any) => {
          reject(error);
        }

      });

    });
  }

  /**
   * Solicitar al servidor información de una localización
   * @param localizacionUrl Url de la localización
   * @returns Información de la localización
   */
  public getLocalizacionInfoDetail(localizacionUrl: string) {

    return new Promise<any>(async (resolve, reject) => {

      const url = localizacionUrl;

      this._httpService.get(url).pipe(takeUntil(this.destroyed$)).subscribe({

        next: async (result: IResultsL) => {

          if (result) {
            resolve(result);
          } else {
            reject(false);
          }

        },
        error: (error: any) => {
          reject(error);
        }

      });

    });
  }
}
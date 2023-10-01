import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
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

        next: async (result: any) => {

          if (result && result?.results) {
            resolve(result.results);
          } else {
            reject(result);
          }

        },
        error: (error: any) => {
          reject(error);
        }

      });

    });
  }
}
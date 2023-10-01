import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IPersonaje } from 'src/app/core/interfaces/personajes.interface';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class PersonajesInfoService {

  private destroyed$ = new Subject<void>();

  constructor(
    private _httpService: HttpService,
  ) { }

  public destroy() {
    this.destroyed$.next();
  }

  /**
   * Método para obtener el listado de personajes
   * @returns información del listado de personajes
   */
  public getPersonajesInfo() {

    return new Promise<any>(async (resolve, reject) => {

      const url = "https://rickandmortyapi.com/api/character";

      this._httpService.get(url).pipe(takeUntil(this.destroyed$)).subscribe({

        next: async (result: IPersonaje) => {

          if (result && result?.results) {
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
   * Petición al servidor para obtener la información de un personaje seleccionado
   * @param personajeId Identificador del personaje seleccionado
   * @returns Información de un único personaje
   */
  public getPersonajeInfo(personajeId: number) {

    return new Promise<any>(async (resolve, reject) => {

      const url = `https://rickandmortyapi.com/api/character/${personajeId}`;

      this._httpService.get(url).pipe(takeUntil(this.destroyed$)).subscribe({

        next: async (result: IPersonaje) => {

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
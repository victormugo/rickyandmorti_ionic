import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IEpisodio, IResultsE } from 'src/app/core/interfaces/episodios.interface';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosInfoService {

  private destroyed$ = new Subject<void>();

  constructor(
    private _httpService: HttpService,
  ) { }

  public destroy() {
    this.destroyed$.next();
  }

  /**
   * Método para obtener el listado de episodios
   * @returns información del listado de episodios
   */
  public getEpisodiosInfo() {

    return new Promise<any>(async (resolve, reject) => {

      const url = "https://rickandmortyapi.com/api/episode";

      this._httpService.get(url).pipe(takeUntil(this.destroyed$)).subscribe({

        next: async (result: IEpisodio) => {

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
   * Método para solicitar al servidor información de un episodio a partir del identificador
   * @param episodioId Identificador del episodio
   * @returns Información del episodio solicitado
   */
  public getEpisodioInfo(episodioId: number) {

    return new Promise<any>(async (resolve, reject) => {

      const url = `https://rickandmortyapi.com/api/episode/${episodioId}`;

      this._httpService.get(url).pipe(takeUntil(this.destroyed$)).subscribe({

        next: async (result: IResultsE) => {

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
   * Método para solicitar información de un episodio a partir de la url
   * @param episodeUrl Url del episodio
   * @returns Información del episodio solicitado
   */
  public getEpisodioInfoDetail(episodeUrl: string) {

    return new Promise<any>(async (resolve, reject) => {

      const url = episodeUrl;

      this._httpService.get(url).pipe(takeUntil(this.destroyed$)).subscribe({

        next: async (result: IResultsE) => {

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
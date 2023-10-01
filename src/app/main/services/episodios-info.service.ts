import { Injectable } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IEpisodio } from 'src/app/core/interfaces/episodios.interface';
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

        next: async (result: any) => {

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

  public getEpisodioInfoDetail(episode: string) {

    return new Promise<any>(async (resolve, reject) => {

      const url = episode;

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
}
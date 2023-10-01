import { Injectable } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { Subject } from "rxjs";
import { IEpisodio, IResultsE } from "src/app/core/interfaces/episodios.interface";
import { MessagesService } from "src/app/core/services/messages";
import { EpisodiosInfoService } from "src/app/main/services/episodios-info.service";
import { EpisodiosDetailsPage } from "../../details/episodios-details/episodios-details.page";

@Injectable({ providedIn: 'root' })
export class EpisodiosService {

    private destroyed$ = new Subject<void>();

    public episodios: any[] = [];
   
    constructor(
        private _episodiosService: EpisodiosInfoService,
        private _messagesService: MessagesService,
        private _modalCtrl: ModalController,
        private _navControl: NavController
    ) { }

    public destroy() {
        this.destroyed$.next();
    }

    /**
     * Método para solicitar al servidor el listado de episodios
     */
    public loadEpisodios() {
        this._episodiosService.getEpisodiosInfo()
            .then((result: IEpisodio) => {
                this.episodios = result.results;

            }).catch((error: any) => {
                this._messagesService.presentAlertAccept(error);
            });
    }

    /**
     * Abrir modal para mostrar información del episodio solicitado
     * @param episodio Episodio seleccionado
     */
    public async onClickSelectedEpisodio(episodio: IResultsE) {
        const modal = await this._modalCtrl.create({
            component: EpisodiosDetailsPage,
            componentProps: { episodio },
            id: 'EpisodiosDetailsPage'
        });
        modal.present();

        let response = await modal.onWillDismiss();
    }

    public async closeModalControl(close: boolean) {
        this._modalCtrl.dismiss(close,'','AlarmsPage');
    }

    /**
     * Método para navegar entre pantallas
     * @param destination pantalla destino
     */
    public navigate(destination: string) {
        this._navControl.navigateForward([destination], {
            queryParams: {}
        });
    }
}
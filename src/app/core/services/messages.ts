import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public hideContentSubject$ = new Subject<boolean>();

  constructor(
    public _alertController: AlertController,
    public _loadingController: LoadingController,
  ) { }

  /**
   * Mensaje pregunta cancelable
   * @param message Mensaje en pantalla
   * @returns 
   */
  async presentAlert(message: string) {
    let choice: any;

    const alert = await this._alertController.create({
      header: 'Información',
      subHeader: '',
      message,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (cancel) => {
            alert.dismiss(cancel);
            return cancel;
          }
        },
        {
          text: 'Aceptar',
          handler: (accept) => {
            alert.dismiss(accept);
            return accept;
          }
        }
      ]
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
      choice = data;
    });

    return choice;
  }

  /**
   * Mensaje informativo
   * @param messages Mensaje en pantalla
   * @returns 
   */
  async presentAlertAccept(message: string) {
    let choice: any;

    const alert = await this._alertController.create({
      header: 'Información',
      subHeader: '',
      message,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Aceptar',
          role: 'accept',
          handler: (accept) => {
            alert.dismiss(true);
            return accept;
          }
        }
      ]
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
      choice = data;
    });

    return choice;
  }

  /**
   * Mensaje cargando datos
   * @param message Mensaje informativo en pantalla
   * @returns 
   */
  public presentLoading(message: string) {

    return new Promise<boolean>((resolve, reject) => {
      this._loadingController.create({
        message
      }).then((resultLoading: any) => {
        resolve(true);
        resultLoading.present();

      }).catch((error: any) => {
        reject(error);
      });
    })
  }

  /**
   * Eliminar mensaje cargando en pantalla
   * @returns la eliminación del mensaje en pantalla
   */
  public async dismissLoading() {

    return await this._loadingController.dismiss()
      .then((resultDismiss: any) => {

      }).catch((error: any) => {
      });
  }

}
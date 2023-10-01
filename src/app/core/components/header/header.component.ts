import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HeaderComponent implements OnInit {

  @Input() title:string = '';
  @Input() navigate:string = '';

  @Input() showBackButton:boolean = false;
  @Input() showCloseButton:boolean = false;

  @Output() actionEmitter:EventEmitter<any> = new EventEmitter<any>();

  constructor(
    protected _router: Router,
    private _navControl: NavController
  ) {
  }

  ngOnInit() {}

  public close() {
    this.actionEmitter.emit({action:'close'});
  }

  public comeBack() {
    this.actionEmitter.emit({action:'navigate','url':this.navigate});
  }

  public navigateUrl(destination: string) {
    this._navControl.navigateForward([destination], {
        queryParams: {}
    });
}

}

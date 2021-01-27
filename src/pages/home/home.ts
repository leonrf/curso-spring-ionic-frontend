import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
  
  }

  ionViewWillEnter() { // Comando para desabilitar o menu quando a página estiver em menu
    this.menu.swipeEnable(false);
  }
    ionViewDidLeave() { // Comando para habilitar o menu assim que sair da página menu
    this.menu.swipeEnable(true);
  }

  public login() {
    this.navCtrl.setRoot('CategoriasPage'); // Login vai direto para categorias
  }
}

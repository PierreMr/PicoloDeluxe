import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private navCtrl: NavController,
  ) {}

  nav(url: string) {
    this.navCtrl.navigateForward('/' + url);
  }
}

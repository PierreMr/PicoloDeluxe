import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  rules: any[] = [];
  players: any[] = [];

  constructor(
    private navCtrl: NavController,
  ) { }

  nav(url: string) {
    this.navCtrl.navigateForward('/' + url);
  }

  getRandomRulesFromAllRules(nbRules: number) {
    this.rules = [];
  }

  startGame() {
    this.getRandomRulesFromAllRules(9);
    this.nav('game');
  }

  resetGame() {
    // this.players = [];
    // this.rules = [];
  }
}

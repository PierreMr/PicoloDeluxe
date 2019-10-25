import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { gameRules } from '../interfaces/gameRules.interface';

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
    const rules = [];
    const gameRulesConst = [...gameRules];
    this.rules = [];
    const randomRuleIndexes: number[] = [];
    for (let i = 0; i < nbRules; i++) {
      const randomRuleIndex = Math.floor(Math.random() * gameRulesConst.length);
      if (!randomRuleIndexes.includes(randomRuleIndex)) {
        randomRuleIndexes.push(randomRuleIndex);
        rules.push(gameRulesConst[randomRuleIndex]);
        console.log(gameRulesConst[randomRuleIndex]);
      } else {
        i--;
      }
    }
    this.rules = [...rules];
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

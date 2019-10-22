import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { gameRules } from '../interfaces/gameRules.interface';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  allRules: any[] = [...gameRules];
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
    const randomRuleIndexes: number[] = [];
    for (let i = 0; i < nbRules; i++) {
      const randomRuleIndex = Math.floor(Math.random() * this.allRules.length);
      if (!randomRuleIndexes.includes(randomRuleIndex)) {
        randomRuleIndexes.push(randomRuleIndex);
        this.rules.push(this.allRules[randomRuleIndex]);
        console.log(this.allRules[randomRuleIndex]);
      } else {
        i--;
      }
    }
  }

  updateRules() {
    this.rules.forEach((rule, index) => {
      for (let i = 0; i < rule.playersInvolved; i++) {
        // tslint:disable-next-line:max-line-length
        this.rules[index].text = this.rules[index].text.replace('$player' + (i + 1), this.players[Math.floor(Math.random() * this.players.length)]);
      }
    });
  }

  startGame() {
    this.getRandomRulesFromAllRules(9);
    this.updateRules();
    this.nav('game');
  }

  resetGame() {
    // this.players = [];
    // this.rules = [];
  }
}

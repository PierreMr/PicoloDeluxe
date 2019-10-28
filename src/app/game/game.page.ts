import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  indexGame = 0;
  rules: any[] = [...this.gameSrvc.rules];
  rule: any;

  constructor(
    private navCtrl: NavController,
    private gameSrvc: GameService,
  ) { }

  ngOnInit() {
    this.rule = this.updateRule(this.rules[this.indexGame]);
  }

  nav(url: string) {
    this.navCtrl.navigateForward('/' + url);
  }

  next() {
    if (this.indexGame < this.rules.length - 1) {
      this.indexGame++;
      this.rule = this.updateRule(this.rules[this.indexGame]);
    } else {
      this.gameSrvc.resetGame();
      this.navCtrl.navigateForward('/home');
    }
  }

  updateRule(rule) {
    const updatedRule = rule;
    for (let i = 0; i < rule.playersInvolved; i++) {
      // tslint:disable-next-line:max-line-length
      updatedRule.text = rule.text.replace('$player' + (i + 1), this.gameSrvc.players[Math.floor(Math.random() * this.gameSrvc.players.length)]);
    }
    return updatedRule;
  }
}

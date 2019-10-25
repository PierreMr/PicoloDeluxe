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
  rule: any = this.gameSrvc.rules[this.indexGame];

  constructor(
    private navCtrl: NavController,
    private gameSrvc: GameService,
  ) { }

  ngOnInit() {
  }

  next() {
    if (this.indexGame < this.gameSrvc.rules.length - 1) {
      this.indexGame++;
      this.rule = this.gameSrvc.rules[this.indexGame];
    } else {
      this.gameSrvc.resetGame();
      this.navCtrl.navigateForward('/home');
    }
  }

  updateRule(rule) {
    let ruleText = rule.text;
    for (let i = 0; i < rule.playersInvolved; i++) {
      // tslint:disable-next-line:max-line-length
      ruleText = rule.text.replace('$player' + (i + 1), this.gameSrvc.players[Math.floor(Math.random() * this.gameSrvc.players.length)]);
    }
    return ruleText;
  }
}

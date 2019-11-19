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

  nav(url: string) {
    this.navCtrl.navigateForward('/' + url);
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
}

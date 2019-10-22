import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  player = 'Player';
  players: string[] = [
    'Player1',
    'Player2',
    'Player3',
    'Player4',
    'Player5',
    // 'Player6',
    // 'Player7',
    // 'Player8',
    // 'Player9',
  ];

  constructor(
    private navCtrl: NavController,
    private gameSrvc: GameService,
  ) {}

  nav(url: string) {
    this.navCtrl.navigateForward('/' + url);
  }

  addPlayer() {
    this.players.push(this.player);
    this.player = '';
  }

  removePlayer(index: number) {
    this.players.splice(index, 1);
  }

  play() {
    this.gameSrvc.players = this.players;
    this.gameSrvc.startGame();
  }
}

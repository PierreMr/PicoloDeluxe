import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.page.html',
  styleUrls: ['./start-game.page.scss'],
})
export class StartGamePage implements OnInit {
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
    private gameSrvc: GameService,
  ) { }

  ngOnInit() {
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

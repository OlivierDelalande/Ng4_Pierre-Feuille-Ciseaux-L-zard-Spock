import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', 'foundation.min.css']
})
export class AppComponent {

  choice = ["stone", "sheet", "cissors", "lezard", "spock"];
  player1 = 'stone';
  player2 = 'stone';
  increment = 0;
  gameState = 'not started';
  results =   {
    "stone" : {
      "sheet": "player 2 wins - the sheet covers the stone",
      "cissors": "player 1 wins - the stone blunt the scissors",
      "lezard": "player 1 wins - the stone smach the lezard",
      "spock": "player 2 wins - spock vaporises the stone",
      "stone": "draw"
    },
    "sheet" : {
      "stone": "player 1 wins - the sheet covers the stone",
      "scissors": "player 2 wins - the scissors cut the sheet",
      "lezard": "player 2 wins - the lezard eat the sheet",
      "spock": "player 1 wins - the sheet discredit spock",
      "sheet": "draw"
    },
    "scissors" : {
      "stone": "player 2 wins - the stone blunt the scissors",
      "sheet": "player 1 wins - the scissors cut the sheet",
      "lezard": "player 1 wins - the scissors decapitate the lezard",
      "spock": "player 2 wins - spock breaks the scissors",
      "scissors": "draw"
    },
    "lezard" : {
      "stone": "player 2 wins - the stone smach the lezard",
      "sheet": "player 1 wins - the lezard eat the sheet",
      "scissors": "player 2 wins - the scissors decapitate the lezard",
      "spock": "player 1 wins - the lezard poison spock",
      "lezard": "draw"
    },
    "spock" : {
      "stone": "player 1 wins - spock vaporises the stone",
      "sheet": "player 2 wins - the sheet discredit spock",
      "scissors": "player 1 wins - spock breaks the scissors",
      "lezard": "player 2 wins - the lezard poison spock",
      "spock": "draw"
    }
  };
  result = '';

  startGame() {
    this.gameState = 'player1'
  }

  choosep1() {
    this.gameState = 'player2';
    this.increment = 0;
  }

  nextp1(){
    this.increment = this.increment + 1;
    this.player1 = this.choice[this.increment];
  }

  backp1(){
    this.increment = this.increment - 1;
    this.player1 = this.choice[this.increment];
  }

  choosep2() {
    this.gameState = 'end game';
    this.result = this.results[this.player1][this.player2]
  }

  nextp2(){
    this.increment = this.increment + 1;
    this.player2 = this.choice[this.increment];
  }

  backp2(){
    this.increment = this.increment - 1;
    this.player1 = this.choice[this.increment];
  }

  restart() {
    this.player1 = 'stone';
    this.player2 = 'stone';
    this.increment = 0;
    this.gameState = 'player1';
  }
}

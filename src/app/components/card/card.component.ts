import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  images : any[]=[
    {
      source:
      [
        "assets/imgs/cabin.png",
        "assets/imgs/cake.png",
        "assets/imgs/circus.png",
        "assets/imgs/game.png",
        "assets/imgs/safe.png",
        "assets/imgs/submarine.png"
      ]

  }
]
}

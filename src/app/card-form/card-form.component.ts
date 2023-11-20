// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  cardData: any = {};

  updateCardData(data: any) {
    this.cardData = data;
  }
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() nom: string = 'haykel';
  @Output() prenom: string = 'braga';

  @Output() formData = new EventEmitter<any>();

  updateCard() {
    const data = { nom: this.nom, prenom: this.prenom /* add other properties */ };
    this.formData.emit(data);
  }
}

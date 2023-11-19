import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';


@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
  nom:string =  'BARGOUGUI';
  prenom:string=  'Haykel';
  entreprise: string = 'INSAT';
  poste: string ='Student';
  email = 'haykel.bargougui@insat.ucar.tn';
  };




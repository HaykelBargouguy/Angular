import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  couleur: string = "#AB0909"; 
  reinitialiserCouleur() {
    this.couleur = "#AB0909"; // Réinitialiser à la couleur par défaut
  }

}

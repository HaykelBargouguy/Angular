import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  parentColor = 'green'; // Set the initial color of the parent

  setParentColor(color: string) {
    // Update the parent color with the favorite color from the child
    this.parentColor = color;
  }
}

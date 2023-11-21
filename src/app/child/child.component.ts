import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() childColor: string ='yellow'; // Receive the color from the parent


  myFavoriteColor: string = ''; // New variable to store the favorite color

  @Output() setParentColorEvent = new EventEmitter<string>(); // Event emitter to notify parent

  setParentBackgroundColor() {
    // Emit the event with the favorite color
    this.setParentColorEvent.emit(this.myFavoriteColor);
  }
  
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  Color='green'; 
  two:any="myInitValue";
  

  name:string = 'braga' ;

  getName(){
    return this.name;
    } ; 

  modifier(newName :string){
    this.name=newName;
    }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { CardFormComponent } from './card-form/card-form.component';
import { VisitCardComponent } from './visit-card/visit-card.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CardComponent,
    FormComponent,
    CardFormComponent,
    VisitCardComponent,
    ChildComponent,
    ParentComponent
    ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

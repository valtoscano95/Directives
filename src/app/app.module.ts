import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { CounterComponent } from './counter/counter.component';
import { CounterClassComponent } from './counter-class/counter-class.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    CounterComponent,
    CounterClassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

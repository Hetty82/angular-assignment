import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';

import { AppComponent }              from './app.component';
import { QuestionDetailComponent }   from './question-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    QuestionDetailComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

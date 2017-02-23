import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { HttpModule }      from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }      from 'angular-in-memory-web-api';
import { InMemoryDataService }       from './services/in-memory-data.service';

import { AppComponent }              from './components/app.component';
import { QuestionDetailComponent }   from './components/question-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    QuestionDetailComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

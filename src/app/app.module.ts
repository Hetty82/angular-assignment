import { NgModule }        from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { FormsModule }     from '@angular/forms';
import { HttpModule }      from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }      from 'angular-in-memory-web-api';
import { InMemoryDataService }       from './services/in-memory-data.service';

import { AppComponent }                      from './components/app.component';
import { FormComponent }                     from './components/form.component';
import { ResultComponent }                   from './components/result.component';
import { QuestionComponent }                 from './components/question.component';
import { OpenQuestionComponent }             from './components/open-question.component';
import { MultipleChoiceQuestionComponent }   from './components/multiple-choice-question.component';

import { QuestionService }            from './services/question.service';
import { InfoService }                from './services/info.service';
import { LocalStorageDataService }    from './services/local-storage-data.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    FormComponent,
    ResultComponent,
    QuestionComponent,
    OpenQuestionComponent,
    MultipleChoiceQuestionComponent,
  ],
  providers: [
    QuestionService,
    InfoService,
    LocalStorageDataService,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

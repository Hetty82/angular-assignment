import { Component, OnInit }          from '@angular/core';

import { Question }                   from '../models/question';
import { InfoService }                from '../services/info.service';
import { QuestionService }            from '../services/question.service';
import { LocalStorageDataService }    from '../services/local-storage-data.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  name: string;
  introText: string;
  questions: Question[];

  status: string = 'unstarted';

  constructor(
    private infoService: InfoService,
    private questionService: QuestionService,
    private localStorageDataService: LocalStorageDataService,
  ) {}

  ngOnInit(): void {
    this.setInfo();
    this.setQuestions();
  }

  // set status to load form
  start(): void {
    this.status = 'started';
  }

  // set status and clear data if child compnent has restarted
  onRestart(): void {
    this.status = 'started';
    this.clearAssignment();
  }

  // set status and save data if child form is submitted
  onSubmit(): void {
    this.status = 'submitted';
    this.saveQuestionsToStorage(this.questions);
  }

  // clean storage and retrieve clean questions
  clearAssignment(): void {
    this.deleteQuestionsFromStorage()
    this.setQuestionsFromApi();
  }

  // get data for header
  setInfo(): void {
    this.infoService.getInfo()
      .then(info => {
         this.name = info.name;
         this.introText = info.introText;
      })
  }

  // Set questions from api unless found in storage
  setQuestions(): void {
    this.setQuestionsFromStorage()
    if (!this.questions) {
      this.setQuestionsFromApi()
    }
  }

  // Set clean questions from api
  setQuestionsFromApi(): void {
    this.questionService.getQuestions()
      .then(questions => this.questions = questions);
  }

  // Set questions and status from storage
  setQuestionsFromStorage(): void {
    this.questions = this.localStorageDataService.get();
    if (this.questions) {
      this.status = 'submitted';
    }
  }

  saveQuestionsToStorage(questions: Question[]): void {
    this.localStorageDataService.set(questions);
  }

  deleteQuestionsFromStorage(): void {
    this.localStorageDataService.delete();
  }

  // uncomment for debugging
  // get diagnostic() { return JSON.stringify(this.questions, null, 2); }
}

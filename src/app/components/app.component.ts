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
    this.getInfo();
    this.getQuestions();
  }

  // events emitted from children

  // start assigment to load form
  start(): void {
    this.status = 'started';
  }

  // set isSubmitted if child compnent has restarted
  onRestart(): void {
    this.status = 'started';
    this.reStart();
  }

  // set isSubmitted if child form is submitted
  onSubmit(): void {
    this.status = 'submitted';
    this.handIn();
  }

  // own methods

  // clean storage and retrieve clean questions
  reStart(): void {
    this.deleteQuestionsFromStorage()
    this.getQuestions();
  }

  // save to storage on handin
  handIn(): void {
    this.saveQuestionsToStorage(this.questions);
  }

  // get data for header
  getInfo(): void {
    this.infoService.getInfo()
      .then(info => {
         this.name = info.name;
         this.introText = info.introText;
      })
  }

  // Get questions from api unless found in storage
  getQuestions(): void {
    let questionsFromStorage = this.getQuestionsFromStorage();

    if (!questionsFromStorage) {
      this.questionService.getQuestions()
        .then(questions => this.questions = questions);
    }
  }

  getQuestionsFromStorage(): void {
    this.questions = this.localStorageDataService.get();
  }

  saveQuestionsToStorage(questions: Question[]): void {
    this.localStorageDataService.set(this.questions);
    console.log('on handIn() call to saveQuestionsFromStorage: ', this.questions);
  }

  deleteQuestionsFromStorage(): void {
    this.localStorageDataService.delete();
  }
}

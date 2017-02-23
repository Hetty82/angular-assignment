import { Component, OnInit }       from '@angular/core';
import { FormsModule }             from '@angular/forms';

import { Question }                   from '../models/question';
import { QuestionDetailComponent }    from '../components/question-detail.component';
import { QuestionService }            from '../services/question.service';
import { InfoService }                from '../services/info.service';
import { LocalStorageDataService }    from '../services/local-storage-data.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService, InfoService, LocalStorageDataService],
})

export class AppComponent implements OnInit {
  questions: Question[];
  name: string;
  introText: string;
  userAnswers: [];

  isStarted = false;

  // constructor
  constructor(
    private questionService: QuestionService,
    private infoService: InfoService,
    private localStorageDataService: LocalStorageDataService,
  ) {}

  ngOnInit(): void {
    this.getInfo();
    this.getQuestions();
    this.getAnswers();
  }

  // start assigment
  start(): void {
    this.isStarted = true;
  }

  // restart assigment
  reStart(): void {
    this.isStarted = true;
    // todo: clear answers here
    // todo: clear localStorage
  }

  // handin assignment
  handIn(value, valid): void {
    console.log('ingeleverd!', value, valid);
    // todo: collect answers
    // todo: save answers to local storage
    // todo: check answers
    // todo: show (corrected) answers
  }

  getInfo(): void {
    this.infoService.getInfo()
      .then(info => {
         this.name = info.name;
         this.introText = info.introText;
      })
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .then(questions => this.questions = questions);
  }

  getAnswers(): void {
    this.userAnswers = this.localStorageDataService.get();
    console.log(this.userAnswers);
  }

  setAnswers(): void {
    this.localStorageDataService.set(this.userAnswers);
  }
}

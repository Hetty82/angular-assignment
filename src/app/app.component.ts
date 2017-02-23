import { Component, OnInit }       from '@angular/core';

import { Question }                   from './question';
import { QuestionDetailComponent }    from './question-detail.component';
import { QuestionService }            from './question.service';
import { InfoService }                from './info.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService, InfoService],
})

export class AppComponent implements OnInit {
  questions: Question[];
  name: string;
  introText: string;

  isStarted = false;

  // constructor
  constructor(
    private questionService: QuestionService,
    private infoService: InfoService,
  ) {}

  ngOnInit(): void {
    this.getInfo();
    this.getQuestions();
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
  handIn(): void {
    // todo: save to local storage
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
}

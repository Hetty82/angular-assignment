import { Component, OnInit }       from '@angular/core';

import { Question }                   from './question';
import { QuestionDetailComponent }    from './question-detail.component';
import { QuestionService }            from './question.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService],
})

export class AppComponent implements OnInit {
  // todo: get values from real data
  name = 'Opdracht 1';
  introText = 'Vragen over ons Koningshuis';
  questions: Question[];

  // initialize isStarted
  isStarted = false;

  // constructor
  constructor(
    private questionService: QuestionService,
  ) {}

  ngOnInit(): void {
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

  getQuestions(): void {
    this.questionService.getQuestions()
      .then(questions => this.questions = questions);
  }
}

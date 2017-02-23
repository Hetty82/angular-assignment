import { Component }       from '@angular/core';

import { Question }                   from './question';
import { QuestionDetailComponent }    from './question-detail.component'

const QUESTIONS: Question[] = [
  {
    "questionId": 1,
    "question": "Wat is de politieke vorm van Nederland?",
    // "questionType": "multiple_choice",
    // "answers": [
    //   {
    //     "answer": "Parlementaire democratie met constitutionele monarchie",
    //     "answerId": 102,
    //     "isCorrect": true
    //   },
    //   {
    //     "answer": "Monarchie",
    //     "answerId": 574,
    //     "isCorrect": false
    //   },
    //   {
    //     "answer": "Hierarchie",
    //     "answerId": 246,
    //     "isCorrect": false
    //   }
    // ],
    // "userAnswer": null
  },
  {
    "questionId": 2,
    "question": "Wat kan jij vertellen over ons koningshuis?",
    // "questionType": "open_question",
    // "userAnswer": null
  },
  {
    "questionId": 3,
    "question": "Hoe nuttig vind jij de aanwezigheid van onze monarchie?",
    // "questionType": "open_question",
    // "userAnswer": null
  },
  {
    "questionId": 4,
    "question": "Wie is de huidige koning van Nederland?",
    // "questionType": "multiple_choice",
    // "answers": [
    //   {
    //     "answer": "Koning Bernard  II",
    //     "answerId": 201,
    //     "isCorrect": false
    //   },
    //   {
    //     "answer": "Vader Abraham",
    //     "answerId": 202,
    //     "isCorrect": true
    //   },
    //   {
    //     "answer": "Willem Alexander",
    //     "answerId": 203,
    //     "isCorrect": false
    //   }
    // ],
    // "userAnswer": null
  },
  {
    "questionId": 5,
    "question": "Wat zou jij veranderen als je Nederland zou besturen voor een dag?",
    // "questionType": "open_question",
    // "userAnswer": null
  }
];

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent  {
  // todo: get values from real data
  name = 'Opdracht 1';
  introText = 'Vragen over ons Koningshuis';
  questions = QUESTIONS;

  // initialize isStarted
  isStarted = false;

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
}

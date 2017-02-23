import { Component } from '@angular/core';

export class Question {
  questionId: number;
  question: string;
  // isMultipleChoice: boolean;
  // answers: object;
  // userAsnwer: string;
}

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
  selector: 'my-app',
  template: `
    <header>
      <h1>{{name}}</h1>
      <h2>{{introText}}</h2>
    </header>

    <ul class="questions">
      <li *ngFor="let question of questions">
        <h3>Vraag {{question.questionId}}</h3>
        <p>{{question.question}}</p>
      </li>
    </ul>
  `,
  styles: [`
    header {
      margin-bottom: 2em;
    }

    h1 {
      margin-bottom: 0.2em;
    }

    .questions {
      margin: 0; padding: 0; list-style: none;
    }

    .questions li {
      padding: 1em;
      margin-bottom: 2em;
      background: var(--turquoise);
      color: white;
    }

    .questions p {
      line-height: 1.4;
    }

    h3 {
      margin-bottom: 0.5em;
      color: var(--purple);
    }`
  ],
})

export class AppComponent  {
  // todo: get name and introText from real data
  name = 'Opdracht 1';
  introText = 'Vragen over ons Koningshuis';
  questions = QUESTIONS;
}

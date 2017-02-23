import { Component, Input } from '@angular/core';

import { Question } from '../models/question';

@Component({
  moduleId: module.id,
  selector: 'my-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
})

export class QuestionDetailComponent {
  @Input()
  question: Question;
}

import { Component, Input }     from '@angular/core';

import { Question }             from '../models/question';

@Component({
  moduleId: module.id,
  selector: 'my-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})

export class QuestionComponent {
  @Input() status: string;
  @Input() question: Question;
}

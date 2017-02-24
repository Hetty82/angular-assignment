import { Component, Input }     from '@angular/core';
import { FormsModule }          from '@angular/forms';

import { Question }             from '../models/question';

@Component({
  moduleId: module.id,
  selector: 'my-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css'],
})

export class MultipleChoiceQuestionComponent {
  @Input() status: string;
  @Input() question: Question;
}

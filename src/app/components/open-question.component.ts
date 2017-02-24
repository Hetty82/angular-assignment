import { Component, Input }     from '@angular/core';
import { FormsModule }          from '@angular/forms';

import { Question }             from '../models/question';

@Component({
  moduleId: module.id,
  selector: 'my-open-question',
  templateUrl: './open-question.component.html',
  styleUrls: ['./open-question.component.css'],
})

export class OpenQuestionComponent {
  @Input() status: string;
  @Input() question: Question;
}

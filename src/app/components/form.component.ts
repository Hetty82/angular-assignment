import { Component, Input, Output, EventEmitter }   from '@angular/core';
import { FormsModule }                from '@angular/forms';

import { Question }                   from '../models/question';

@Component({
  moduleId: module.id,
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent {
  @Input() status: string;
  @Input() questions: Question[];

  @Output() onSubmit = new EventEmitter<boolean>();
  @Output() onRestart = new EventEmitter<boolean>();

  // emit restart event to parent
  reStart(): void {
    this.onRestart.emit(true);
  }

  // emit handin event to parent
  handIn(): void {
    this.onSubmit.emit(true);
  }

  // uncomment for debugging
  get diagnostic() { return JSON.stringify(this.questions, null, 2); }
}

import { Component, OnInit, Input, Output, EventEmitter }  from '@angular/core';
import { FormsModule }                from '@angular/forms';

import { Question }                   from '../models/question';
import { QuestionComponent }          from '../components/question.component';

@Component({
  moduleId: module.id,
  selector: 'my-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})

export class ResultComponent implements OnInit {
  @Input() status: string;
  @Input() questions: Question[];

  @Output() onRestart = new EventEmitter<boolean>();

  // emit restart event to parent
  reStart(): void {
    this.onRestart.emit(true);
  }

  // uncomment for debugging
  get diagnostic() { return JSON.stringify(this.questions, null, 2); }

}

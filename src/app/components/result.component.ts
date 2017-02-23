import { Component, OnInit, Input, Output, EventEmitter }  from '@angular/core';

import { Question }                   from '../models/question';
import { QuestionDetailComponent }    from '../components/question-detail.component';
import { QuestionService }            from '../services/question.service';
import { LocalStorageDataService }    from '../services/local-storage-data.service';

@Component({
  moduleId: module.id,
  selector: 'my-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})

export class ResultComponent implements OnInit {
  @Input() status: string;
  @Output() onRestart = new EventEmitter<boolean>();

  questions: Question[];
  userAnswers: any[];

  constructor(
    private questionService: QuestionService,
    private localStorageDataService: LocalStorageDataService,
  ) {}

  ngOnInit(): void {
    this.getQuestions();
  }

  // restart assigment
  reStart(): void {
    console.log('restarted!');
    this.onRestart.emit(true);
    // todo: clear localStorage
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .then(questions => this.questions = questions);
  }
}

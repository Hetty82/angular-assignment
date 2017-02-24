import { Component, OnInit, Input, Output, EventEmitter }  from '@angular/core';
import { FormsModule }                from '@angular/forms';

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

    // delete questions both in memory as in localStorage
    this.deleteQuestionsFromStorage()
    this.questions = [];

    // emit event to parent
    this.onRestart.emit(true);
  }

  // Get questions from api unless found in storage
  getQuestions(): void {
    this.getQuestionsFromStorage();
  }

  getQuestionsFromStorage(): void {
    this.questions = this.localStorageDataService.get();
  }

  deleteQuestionsFromStorage(): void {
    this.localStorageDataService.delete();
  }

  // todo: remove when done
  get diagnostic() { return JSON.stringify(this.questions, null, 2); }

}

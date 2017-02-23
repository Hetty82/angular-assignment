import { Component, OnInit, Input, Output, EventEmitter }   from '@angular/core';
import { FormsModule }                from '@angular/forms';

import { Question }                   from '../models/question';
import { QuestionDetailComponent }    from '../components/question-detail.component';
import { QuestionService }            from '../services/question.service';
import { LocalStorageDataService }    from '../services/local-storage-data.service';

@Component({
  moduleId: module.id,
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {
  @Input() status: string;
  @Output() onSubmit = new EventEmitter<boolean>();
  @Output() onRestart = new EventEmitter<boolean>();

  questions: Question[];
  userAnswers: any[];

  constructor(
    private questionService: QuestionService,
    private localStorageDataService: LocalStorageDataService,
  ) {}

  ngOnInit(): void {
    this.getQuestions();
    this.getAnswersFromStorage();
  }

  // restart assigment
  reStart(): void {
    console.log('restarted!');
    this.onRestart.emit(true);
    // todo: clear answers here
    // todo: clear localStorage
  }

  // handin assignment
  handIn(): void {
    console.log('ingeleverd!');
    this.onSubmit.emit(true);
    // todo: collect answers
    // todo: save answers to local storage
    // todo: check answers
    // todo: show (corrected) answers
  }

  getQuestions(): void {
    this.questionService.getQuestions()
      .then(questions => this.questions = questions);
  }

  getAnswersFromStorage(): void {
    this.userAnswers = this.localStorageDataService.get();
    // console.log(this.userAnswers);
  }

  setAnswersToStorage(): void {
    this.localStorageDataService.set(this.userAnswers);
  }
}

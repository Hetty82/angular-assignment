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
  }

  // restart assigment, todo: merge this with result.reStart()
  reStart(): void {
    console.log('restarted!');

    // delete questions both in memory as in localStorage
    this.deleteQuestionsFromStorage()
    this.questions = [];

    // emit event to parent
    this.onRestart.emit(true);
  }

  // handin assignment
  handIn(event: Event): void {
    // event.preventDefault();
    console.log('ingeleverd!');

    // save questions in localStorage
    this.saveQuestionsToStorage(this.questions);

    // todo: chick this: fill questions with data from local storage
    this.getQuestionsFromStorage();

    // emit event to parent
    this.onSubmit.emit(true);

    // this fails in the service
    // this.questions.forEach(question => {
    //   this.questionService.update(question);
    // })
  }

  // Get questions from api unless found in storage or from api
  getQuestions(): void {
    let questionsFromStorage = this.getQuestionsFromStorage();

    if (!questionsFromStorage) {
      this.questionService.getQuestions()
        .then(questions => this.questions = questions);
    }
  }

  getQuestionsFromStorage(): void {
    this.questions = this.localStorageDataService.get();
  }

  saveQuestionsToStorage(questions: Question[]): void {
    this.localStorageDataService.set(this.questions);
    console.log('on handIn() call to saveQuestionsFromStorage: ', this.questions);
  }

  deleteQuestionsFromStorage(): void {
    this.localStorageDataService.delete();
  }

  // todo: remove when done
  get diagnostic() { return JSON.stringify(this.questions, null, 2); }
}

import { Injectable } from '@angular/core';

import { Question }   from '../models/question';

@Injectable()

export class LocalStorageDataService {

  set(questions: Question[]) {
    localStorage.setItem('assignmentQuestions', JSON.stringify(questions))
  }

  get() {
    let data = JSON.parse(localStorage.getItem('assignmentQuestions'));

    if (!data) { return undefined; }

    return data ;
  }

  delete() {
    localStorage.removeItem('assignmentQuestions');
  }
}

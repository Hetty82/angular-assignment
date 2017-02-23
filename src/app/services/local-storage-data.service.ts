import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageDataService {

  set(userAnswers) {
    localStorage.setItem('assignmentAnswers', JSON.stringify(userAnswers))
  }

  get() {
    let data = JSON.parse(localStorage.getItem('assignmentAnswers'));

    if (!data) {
      return undefined;
     }

    return data ;
  }
}

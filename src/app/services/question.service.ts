import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Question }     from '../models/question';

@Injectable()

export class QuestionService {
  private questionsUrl = 'api/questions';
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(
    private http: Http
  ) {}

  getQuestions(): Promise<Question[]> {
    let questionsPromise = this.http.get(this.questionsUrl)
      .toPromise()
      .then(response => response.json().data as Question[])
      .catch(this.handleError);
    return questionsPromise;
  }
}

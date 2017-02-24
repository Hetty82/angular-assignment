import { Injectable }     from '@angular/core';
// import { Headers, Http }  from '@angular/http';
import { Http }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Question }     from '../models/question';

@Injectable()

export class QuestionService {
  private questionsUrl = 'api/questions';
  // private headers = new Headers({'Content-Type': 'application/json'});

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

  // // todo: fix broken returns error 404
  // update(question: Question): Promise<Question> {
  //   const url = `${this.questionsUrl}?questionId=${question.questionId}`;
  //   console.log(this.questionsUrl, question)
  //   return this.http
  //     .put(url, JSON.stringify(question), {headers: this.headers})
  //     .toPromise()
  //     .then(() => question)
  //     .catch(this.handleError);
  // }
}

import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class InfoService {
  private infoUrl = 'api/info';
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  constructor(
    private http: Http
  ) {}

  getInfo(): Promise<Object> {
    let infoPromise = this.http.get(this.infoUrl)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
    return infoPromise;
  }
}

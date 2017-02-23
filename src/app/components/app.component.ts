import { Component, OnInit }          from '@angular/core';

import { Question }                   from '../models/question';
import { InfoService }                from '../services/info.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  name: string;
  introText: string;

  status: string = 'unstarted';

  constructor(
    private infoService: InfoService,
  ) {}

  ngOnInit(): void {
    this.getInfo();
  }

  // start assigment to load form
  start(): void {
    this.status = 'started';
  }

  // set isSubmitted if child compnent has restarted
  onRestart(): void {
    this.status = 'started';
  }

  // set isSubmitted if child form is submitted
  onSubmit(): void {
    this.status = 'submitted';
  }

  // get data for header
  getInfo(): void {
    this.infoService.getInfo()
      .then(info => {
         this.name = info.name;
         this.introText = info.introText;
      })
  }
}

import { InMemoryDbService }   from 'angular-in-memory-web-api';
import { assignmentData }      from '../data/assignment-data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let questions = assignmentData.questions;
    let info = {
      introText: assignmentData.introText,
      name: assignmentData.name,
    };

    return {questions, info};
  }
}

# Angular Assignment
Assigment for application procedure for publishing company.

## Assignment
Build small Angular 2 application using TypeScript and Http, based on given instructions.

## Requirements to run the app
Apart from the angular requirements you probably want to run this in Chrome or another Webkit-browser, since I use css variables and they are not supported in IE yet.

## Preparation
1. Make an ugly drawing of what the app will look like
2. Scribble the behaviors that come into mind on it
3. Make a photo to save it in the project
4. Write down some option extra features to add if things would go very fast

### Optional Extra Features
1. Save all form updates on input
2. Add pretty styles
3. Add http error handling
4. Add form validation
5. Add unit tests

## Project Setup
1. Create bare Angular app by cloning the quickstart repo from https://github.com/angular/quickstart.git
2. Rename and clean the project
3. Git init it
4. Convert given data object into JSON and save it in project

## Building the app
*Go through the angular.io tutorial again but now to use it for building this app*

### Start showing some stuff
1. Show name and introtext in AppComponent
2. Show first question (id and question text) in AppComponent
3. Show all questions in AppComponent
4. Style it up a bit

### Add some buttons
1. Show start button in header if isStarted === false
2. Show restart button if isStarted === true
3. Set isStarted to true on click on either button
4. Style it up a bit
5. Add hand in button that doesnt do anything yet

### Split up some files
1. Move Question class to its own file
2. Create separate QuestionDetailComponent
3. Move templates and styles to their own files

### Add data service
1. Move questions array out of AppComponent
2. Use a service to fetch a promise of a Questions array

### Routing
*I decided to not use routes but leave all in one view without navigation*

### Use http
1. Update the QuesionService and use in-memory-web-api to fake a backend
2. CreateDB and remove other mock data files

### Use original data object
1. Create InfoService
2. Use data from original data object for both info and questions

### Show all the question details
1. Show radios with answers if multiple choice
2. Show textarea input otherwise

### Feel puzzled, research and refactor
1. Refactor into folders
2. Refactor into more components
3. Start sharing data between parents and children
4. Add a resultComponent

### Make the form inputs work
1. Save user input to localStorage
2. Load data from localStorage onInit if it's there

### Make the results show corrections
1. Compare MC-answers to question.isCorrect

<!-- todo -->
2. Show results with corrections
3. Style it up conform instructions

### Refactor
1. Method naming
2. Add function comments
3. Move components in their own folder

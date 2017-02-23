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

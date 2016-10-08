import React, { Component } from 'react';
import logo from './angular.png';
import './App.css';
import Question from './Question';
const jeopardy = [
  {
    title: 'General',
    questions: [
      { Q: 'What is the company that created Angular 2?', A: 'Google'},
      { Q: 'What compiles ESNext for Angular 2?', A: 'TypeScript'},
    ]
  },{
    title: 'Angular-CLI',
    questions: [
      { Q: 'What other CLI is angular-cli based off of?', A: 'ember-cli'},
      { Q: 'What is the command for generating a component?', A: 'ng generate component'},
    ]
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Angular Jeopardy</h2>
        </div>
        <div>
          {jeopardy.map(section => (
              <div>
                <h2>{section.title}</h2>
                <div>
                {section.questions.map(question => (<Question q={question.Q} a={question.A}></Question>))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;

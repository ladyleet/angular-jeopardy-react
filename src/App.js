import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './Question';
import Hello from './Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Jeopardy</h2>
        </div>
        <div>
          {jeopardy.map(section => (
              <div>
                <h2>{section.title}</h2>
                <div>
                {section.questions.map(question => (<Question q={question.Q} a={question.A} img={question.IMG}></Question>))}
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

export const jeopardy = [
  {
    title: 'The Best Questions',
    questions: [
      { Q: 'What does DOM stand for?', A: 'Document Object Model'},
      { Q: 'What is the proper way to "sebsignal"?', IMG: '/seb.png'},
      { Q: 'Why are bananas better than apples?', A: 'They have more a-peel'},
      { Q: 'Why do bananas wear suntan lotion?', A: 'Because they peel'}
    ]
  },{
    title: 'React',
    questions: [
      { Q: 'What is the company that created React?', A: 'Facebook'},
      { Q: 'Is React an MVC based framework?', A: 'No'},
      { Q: 'Is JSX a requirement of React"?', A: 'No'}
    ]
  },{
    title: 'Yarn',
    questions: [
      { Q: 'Whats the logo for yarn?', A: 'A kitten.'},
      { Q: 'Who drew the logo for yarn?', A: 'The James Kyle'},
      { Q: 'Why should you eat bananas?', A: 'They make you peel good'}
    ]
  },{
    title: 'Create React App',
    questions: [
      { Q: 'What is the compiler that Create React App uses to compile code from ESNext to ES?', A: 'Webpack, Babel'},
      { Q: 'Why didnt the banana get his talk done in time for this conference?', A: 'He was potassinating.'},
      { Q: 'Who wrote create-react-app?', A: 'Dan Abramov'}
    ]
  }
];

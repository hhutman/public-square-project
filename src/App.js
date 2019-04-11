import React, { Component } from 'react'
import './App.css'
import SubmissionForm from './SubmissionForm'

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>What is the most important issue facing the United States today?</h2>
          <SubmissionForm />
      </div>
    );
  }
}



export default App;

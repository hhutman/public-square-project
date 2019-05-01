import React, { Component } from 'react'
import './App.css'
import SubmissionForm from './submissionForm'
import workingMother from './Images/workingMother.png'
import moms from './Images/moms.png'
import Navbar from './Navbar'
import Blurb from './Blurb'
import Prompt from './Prompt'


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className = "ProjectTitle">
        <Navbar />
        </div>

        <div className = "container">
        <div className="Img">
        <img src={workingMother} alt="mother and child" height="80px" />
        </div>

        <div className="blurb">
        <Blurb />
        </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="ThePrompt">
          <Prompt />
          </div>

          <div className="Img1">
          <img src={moms} alt="mother and child" width="500px" height="300px" />
          </div>

          <div className="JoinQuestions">
            <ul>
                <li>  Have you ever turned down work because you can’t afford childcare? </li>
                <li>  What percent of your families income goes to childcare?  </li>
                <li>  What changes have you made to make it work? </li>
                  </ul>
            </div>

          <div className="JoinTheConversation">
          <div>
            <h1>Join The Conversation</h1>
            </div>

        <div className="SubmissionForm">
          <SubmissionForm />
          </div>
          </div>




      </div>

    );

  }

}



export default App;

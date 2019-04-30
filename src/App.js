import React, { Component } from 'react'
import './App.css'
import SubmissionForm from './submissionForm'
import Img from 'react-image'
import workingMother from './Images/workingMother.png'





class App extends Component {
  render() {
    return (
      <div className="App">

    <div className="Nav">
    {<h1>Public Square Project</h1>}


      </div>


        <img src={workingMother} alt="mother and child" height="50px" />

          <div className="TheQuestion">
          How has the cost of childcare affected your family?
            <ul>
                <li>  Have you ever turned down work because you can’t afford childcare? </li>
                <li>  What percent of your families income goes to childcare?  </li>
                <li>  What changes have you made to make it work? </li>

                  </ul>

          </div>
          <div className="SubmissionForm">
          <SubmissionForm />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

      </div>

    );

  }

}



export default App;

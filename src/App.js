import React, { Component } from 'react'
import './App.css'
import SubmissionForm from './Components/SubmissionForm/submissionForm'
import Img from 'react-image'


class App extends Component {
  render() {
    return (
      <div className="App">

          <div className="ProjectTitle">

          <span className="strike-center">Public Square Project</span>
          </div>

          <Img src="working_mother.png" />

          <div className="TopicIntro">
          Quality child care is expensive. In many states, it can cost more than tuition at a public university. It’s also in scarce supply.  The average cost of child care in the United States can range from 9 to 36 percent of a family’s income, depending on where they live. Moody’s estimates that the typical family paying for child care spends about 10 percent of their income on it, but the challenge is especially acute for low-income families and single parents. In some states, a minimum wage worker simply would need to work more weeks than exist in a year to afford an average-priced day care.

          </div>
          <div className="Submission_Form">
          <SubmissionForm />
          </div>
      </div>
    );
  }
}



export default App;

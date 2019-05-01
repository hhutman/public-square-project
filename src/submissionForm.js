import React from "react"

import "./App.css"
import "./submissionForm.css"



class submissionForm extends React.Component {

  constructor() {
      super()
      this.state = {
          publicSquareName: "",
          userEmail: "",

      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
      return (

        <div className="form">
            <form onSubmit={this.handleSubmit}>

              <input className="inputStyle"
                  type="text"
                  value={this.state.publicSquareName}
                  name="publicSquareName"
                  placeholder="Choose your Name in the Public Square"
                  onChange={this.handleChange}
                  />

              <br/> <br/><br/>
              <input className="inputStyle"
                  type="text"
                  value={this.state.userEmail}
                  name="userEmail"
                  placeholder="Email: this will not be shown in the square"
                  onChange={this.handleChange}
              />
              <br/> <br/><br/>
              <textarea className="inputStyle"
                  type= "text"
                  value={this.state.blogText}
                  name="blogText"
                  placeholder="How has the cost of childcare affected your or your family?"
                  onChange={this.handleChange}
              />

                <br/> <br/><br/>
      <div className="button">
              <button>Submit</button>
              </div>
          </form>
          </div>
      )
  }
}

export default submissionForm

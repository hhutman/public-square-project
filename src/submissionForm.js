import React from "react"
import ReactDom from "react-dom"
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
                  placeholder="Write the name you want shown with your conversations"
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
              <textarea
                  type= "text"
                  value={this.state.blogText}
                  name="blogText"
                  placeholder="write your reply here"
                  onChange={this.handleChange}
              />

                <br/> <br/><br/>

              <button>Submit</button>
          </form>
          </div>
      )
  }
}

export default submissionForm

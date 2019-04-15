import React from "react"
import ReactDom from "react-dom"

const inputStyle = {
  width: '300px',

}

class SubmissionForm extends React.Component {

  constructor() {
      super()
      this.state = {
          publicSquareName: "",
          userEmail: "",
          // isFriendly: false,
          // gender: "",
          // favColor: "blue"
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
      return (
            <form onSubmit={this.handleSubmit}>
              <input style={{inputStyle}}
                  type="text"
                  value={this.state.publicSquareName}
                  name="publicSquareName"
                  placeholder="Choose Your Public Square Name"
                  onChange={this.handleChange}
              />

              <input
                  type="text"
                  value={this.state.userEmail}
                  name="userEmail"
                  placeholder="Email: this will not be shown in the square"
                  onChange={this.handleChange}
              />

              <textarea
                  type= "text"
                  value={this.state.blogText}
                  name="blogText"
                  placeholder="write your reply here"
                  onChange={this.handleChange}
              />



              <button>Submit</button>
          </form>
      )
  }
}

export default SubmissionForm

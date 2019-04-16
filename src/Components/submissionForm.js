import React from "react"
import ReactDom from "react-dom"
import "./App.css"

const inputStyle = {
  width: '300px',
  borderStyle: 'groove',
  border: '#d3d3d3',
  marginLeft: '15%',

}

class submissionForm extends React.Component {

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

export default submissionForm

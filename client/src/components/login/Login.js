import React from 'react'
import {Button, FormGroup, Form, Label} from 'reactstrap'
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0
  }

  handleMailChange = event => {
    this.setState({email: event.target.value})
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.isValidCredential().then(() => {
      localStorage.setItem("authToken", "authToken")
      document.location.href="/admin"
    }).catch(error => {
      console.error(error)
    })
  }

  isValidCredential() {
    return new Promise((resolve, reject) => {
      axios.post('/api/auth/log', {
        email: this.state.email,
        passwd: this.state.password
      })
      .then((res) => {
        if (res.data.auth === true) {
          resolve(true)
        } else {
          reject("Bad credentials")
        }
      })
      .catch((error) => console.log(error));
    })
  }

  render() {
    return(
      <div className="Login col-md-8 offset-md-2">
        <h1>Login</h1>
        <Form>
          <FormGroup>
            <Label for="email">Email :</Label><br/>
            <input type="email" value={this.state.email} onChange={this.handleMailChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password :</Label><br/>
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </FormGroup>
          <Button
            type="submit"
            disabled={!this.validateForm()}
            onClick={(e) => this.handleSubmit(e)}
          >
            Login
        </Button>
        </Form>
      </div>
    )
  }
}

export default Login
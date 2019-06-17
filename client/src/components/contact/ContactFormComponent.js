import React from 'react'
import {Button, FormGroup, Form, Label, Input} from 'reactstrap'
import * as emailjs from 'emailjs-com'

class ContactFormComponent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      senderEmail: "",
      message_html: "",
      emailValid: false,
      validMessage: false
    };
  }

  handleMailChange(mail) {
    this.setState({senderEmail: mail})
    this.emailFieldIsValid()
  }

  handleMessageChange(message) {
    this.setState({message_html: message})
    this.messageFieldIsValid()
  }

  emailFieldIsValid() {
    if (this.state.senderEmail.match(/@/g) !== null) {
      this.setState({emailValid: true})
    } else {
      this.setState({emailValid: false})
    }
  }

  messageFieldIsValid() {
    if (this.state.message_html.length >= 9) {
      this.setState({validMessage: true})
    } else {
      this.setState({validMessage: false})
    }
  }

  // Mail send
  handleSubmit = (e) => {
    e.preventDefault();
    // Verify alla fields are Ready
    if (this.state.emailValid && this.state.validMessage) {
      // Send the mail
      emailjs.send("gmail", process.env.REACT_APP_API_TEMPLATE, this.state, process.env.REACT_APP_API_USER)
        .then(function (response) {
          console.log('SUCCESS', response.status, response.text)
        }, function (err) {
          console.log('FAILED...', err)
        })
    } else {
      // Field are not valid input
      alert('Please verify your mail and message')
    }

  };

  render() {
    return(
      <Form className="contact_form col-md-10 offset-md-1 col-sm-10 offset-sm-1">
        <FormGroup>
          <Label for="email">E-mail :</Label>
          <Input
            type="email"
            name="email"
            id="email"
            onChange={(e) => this.handleMailChange(e.target.value)}
            valid={this.state.emailValid}
          />
        </FormGroup>
        <FormGroup>
          <Label for="text">Message :</Label>
          <Input
            type="textarea"
            name="text"
            id="text"
            onChange={(e) => this.handleMessageChange(e.target.value)}
            valid={this.state.validMessage}
          />
        </FormGroup>
        <Button onClick={(e) => this.handleSubmit(e)}>Envoyer</Button>
      </Form>
    )
  }
}

export default ContactFormComponent
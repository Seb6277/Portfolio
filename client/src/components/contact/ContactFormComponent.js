import React from 'react'
import {Button, FormGroup, Form, Label, Input} from 'reactstrap'
import * as emailjs from 'emailjs-com'
import ReCAPTCHA from 'react-google-recaptcha'

class ContactFormComponent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      senderEmail: "",
      message_html: "",
      emailValid: false,
      validMessage: false,
      captchaValid: false,
      toggleTextError: false,
      toggleMailError: false
    };
  }

  handleMailChange(mail) {
    this.setState({senderEmail: mail});
    this.emailFieldIsValid()
  }

  handleMessageChange(message) {
    this.setState({message_html: message});
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
          console.error('FAILED...', err)
        })
      // Field are not valid input
    } else if (!this.state.validMessage && this.state.emailValid) {
      this.setState({toggleTextError: true})
    } else if (!this.state.emailValid && this.state.validMessage) {
      this.setState({toggleMailError: true})
    } else {
      this.setState({toggleMailError: true, toggleTextError: true})
    }
  };

  onCaptchaChange() {
    this.setState({captchaValid: true})
  }

  render() {
    let textError = null;
    if (this.state.toggleTextError) {
      textError = <Label className="textError">Text must be at least 10 character long.</Label>
    } else {
      textError = null
    }

    let mailError = null;
    if (this.state.toggleMailError) {
      mailError = <Label className="textError">Email must contain '@' character.</Label>
    } else {
      mailError = null
    }

    return(
      <Form className="contact_form col-md-10 offset-md-1 col-sm-10 offset-sm-1">
        <FormGroup>
          <Label for="email">E-mail :</Label>
          <Input
            type="text"
            name="email"
            id="email"
            onChange={(e) => this.handleMailChange(e.target.value)}
            valid={this.state.emailValid}
          />
          {mailError}
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
          {textError}
        </FormGroup>
        <div className="captcha col-md-6 offset-md-2">
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_RECAPTCHA}
            onChange={() => this.onCaptchaChange()}
          />
        </div>
        <Button onClick={(e) => this.handleSubmit(e)} disabled={!this.state.captchaValid}>Envoyer</Button>
      </Form>
    )
  }
}

export default ContactFormComponent
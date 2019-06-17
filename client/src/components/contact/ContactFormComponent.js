import React from 'react'
import {Button, FormGroup, Form, Label, Input} from 'reactstrap'
import * as emailjs from 'emailjs-com'

class ContactFormComponent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      senderEmail: "",
      message_html: ""
    };
  }

  handleMailChange(mail) {
    this.setState({senderEmail: mail})
  }

  handleMessageChange(message) {
    this.setState({message_html: message})
  }

  handleSubmit = () => {
    emailjs.send("gmail", process.env.REACT_APP_API_TEMPLATE, this.state, process.env.REACT_APP_API_USER)
      .then(function (response) {
        console.log('SUCCESS', response.status, response.text)
      }, function (err) {
        console.log('FAILED...', err)
      })
  };

  render() {
    return(
      <Form className="contact_form col-md-10 offset-md-1 col-sm-10 offset-sm-1">
        <FormGroup>
          <Label for="email">E-mail :</Label>
          <Input type="email" name="email" id="email" onChange={(e) => this.handleMailChange(e.target.value)}/>
        </FormGroup>
        <FormGroup>
          <Label for="text">Message :</Label>
          <Input type="textarea" name="text" id="text" onChange={(e) => this.handleMessageChange(e.target.value)}/>
        </FormGroup>
        <Button onClick={this.handleSubmit}>Envoyer</Button>
      </Form>
    )
  }
}

export default ContactFormComponent
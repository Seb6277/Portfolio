import React from 'react'
import {Button, FormGroup, Form, Label, Input} from 'reactstrap'

class ContactFormComponent extends React.Component{
  render() {
    return(
      <Form className="contact_form col-md-10 offset-md-1 col-sm-10 offset-sm-1">
        <FormGroup>
          <Label for="email">E-mail :</Label>
          <Input type="email" name="email" id="email"/>
        </FormGroup>
        <FormGroup>
          <Label for="text">Message :</Label>
          <Input type="textarea" name="text" id="text" />
        </FormGroup>
        <Button>Envoyer</Button>
      </Form>
    )
  }
}

export default ContactFormComponent
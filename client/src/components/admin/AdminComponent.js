import React from 'react'
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import FileBase64 from 'react-file-base64'

class AdminComponent extends React.Component {

  projectToSave = {
    caption: "",
    header: "",
    src: ""
  };

  handleNameChange(newHeader) {
    this.projectToSave.header = newHeader;
  }

  handleDescriptionChange(newCaption) {
    this.projectToSave.caption = newCaption;
  }

  getBaseImage(file) {
    if (file.type === "image/png" || file.type === "image/jpg") {
      this.projectToSave.src = file.base64
    }
  }

  handleProjectClick = (e) => {
    fetch('http://localhost:1337/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        src: this.projectToSave.src,
        caption: this.projectToSave.caption,
        header: this.projectToSave.header
      })
    }).catch(function (error) {
      console.log(error)
    })
  };

  render() {
    return(
      <div className="admin_frame col-md-8 offset-md-2">
        <h2>Créer un projet</h2>
        <Form className="admin_form">
          <FormGroup>
            <Label for="Project_name">Nom du projet :</Label>
            <Input
              type="text"
              name="project_name"
              id="project_name"
              onChange={(e) => this.handleNameChange(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="project_description">Description du projet :</Label>
            <Input
              type="textarea"
              name="project_description"
              id="project_description"
              onChange={(e) => this.handleDescriptionChange(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="project_image">Image du projet :</Label>
            <FileBase64
              type="file"
              name="project_image"
              id="project_image"
              multiple={false}
              onDone={this.getBaseImage.bind(this)}
            />
          </FormGroup>
          <Button type="submit" onClick={(e) => this.handleProjectClick(e)}>Envoyer</Button>
        </Form>
      </div>
    )
  }
}

export default AdminComponent
import React from 'react'
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

class AdminComponent extends React.Component {

  projectToSave = {
    caption: "",
    header: "",
    src: ""
  };
  cvUrl = "";

  handleNameChange(newHeader) {
    this.projectToSave.header = newHeader;
  }

  handleDescriptionChange(newCaption) {
    this.projectToSave.caption = newCaption;
  }

  handleImageChange(newSrc) {
    this.projectToSave.src = newSrc;
  }

  handleCvChange(newCv) {
    this.cvUrl = newCv;
  }

  handleProjectClick = () => {
    console.log(this.projectToSave)
  };

  handleCvClick = () => {
    console.log(this.cvUrl)
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
            <Input
              type="file"
              name="project_image"
              id="project_image"
              onChange={(e) => this.handleImageChange(e.target.value)}
            />
          </FormGroup>
          <Button onClick={this.handleProjectClick}>Envoyer</Button>
        </Form>
        <hr/>
        <h2>Changer de cv</h2>
        <Form className="cv_form">
          <FormGroup>
            <Label for="cv_upload">Nouveau CV :</Label><br/>
            <input
              type="file"
              name="cv_upload"
              id="cv_upload"
              onChange={(e) => this.handleCvChange(e.target.value)}
            />
          </FormGroup>
          <Button onClick={this.handleCvClick}>Envoyer</Button>
        </Form>
      </div>
    )
  }
}

export default AdminComponent
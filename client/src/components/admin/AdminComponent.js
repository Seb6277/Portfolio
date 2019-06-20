import React from 'react'
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import FileBase64 from 'react-file-base64'
import ExistingProjectComponent from './ExistingProjectComponent'

class AdminComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: []
    }

    this.handleDeleteClick.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:1337/').then(response => {
      return response.json()
    }).then(data => {
      this.setState({projects: data})
    })
  }

  projectToSave = {
    caption: "",
    header: "",
    src: "",
    url: ""
  };

  handleNameChange(newHeader) {
    this.projectToSave.header = newHeader;
  }

  handleDescriptionChange(newCaption) {
    this.projectToSave.caption = newCaption;
  }

  handleUrlChange(newUrl) {
    this.projectToSave.url = newUrl;
  }

  getBaseImage(file) {
    this.projectToSave.src = file.base64
  }

  handleProjectClick = async (e) => {
    e.preventDefault()
    await fetch('http://localhost:1337/create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        src: this.projectToSave.src,
        caption: this.projectToSave.caption,
        header: this.projectToSave.header,
        url: this.projectToSave.url
      })
    }).then(() => {
      document.location.href="/admin"
    }).catch(function (error) {
      console.log(error)
    })
  };

  handleDeleteClick = (id) => {
    fetch('http://localhost:1337/delete', {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: id
      })
    }).then(() => {
      const projects = [...this.state.projects]
      const index = projects.findIndex((project) => project._id === id)
      projects.splice(index, 1)
      this.setState({projects: projects})
    }).catch((error) => {
      console.log(error)
    })
  }

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
            <Label for="project_url">Url du projet :</Label>
            <Input
              type="text"
              name="project_url"
              id="project_url"
              onChange={(e) => this.handleUrlChange(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="project_image">Image du projet :</Label><br/>
            <div className="filUpload btn btn-primary">
              <FileBase64
                type="file"
                name="project_image"
                id="project_image"
                multiple={false}
                onDone={this.getBaseImage.bind(this)}
              />
            </div>
          </FormGroup>
          <Button className="submit_project" type="submit" onClick={(e) => this.handleProjectClick(e)}>Envoyer</Button>
        </Form>
        <hr/>
        <h2>Supprimer un projet</h2>
        {this.state.projects.map(({_id, header}) => (
          <ExistingProjectComponent key={_id} name={header} id={_id} deleteAction={this.handleDeleteClick}/>
        ))}
      </div>
    )
  }
}

export default AdminComponent
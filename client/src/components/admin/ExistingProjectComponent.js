import React from 'react'
import {Button} from 'reactstrap'

class ExistingProjectComponent extends React.Component{
  render() {
    return(
      <div className="suppress_project">
        <Button
          className="suppress_button"
          color="danger"
          onClick={() => {if (window.confirm('Are you sure ?')) this.props.deleteAction(this.props.id)}}
        >
          X
        </Button>
        <div className="project_name">
          {this.props.name}
        </div>
        <hr/>
      </div>
    )
  }
}

export default ExistingProjectComponent
import React from 'react'
import {Navbar} from 'reactstrap'
import '../css/TitleBar.scss'

class TitleBar extends React.Component{
  render() {
    return(
      <Navbar className="title_bar" color="dark" dark expand="md">
        <h1 color="dark">{this.props.title.toUpperCase()}</h1>
      </Navbar>
    )
  }
}

export default TitleBar;
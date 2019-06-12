import React from 'react'
import {UncontrolledCarousel} from 'reactstrap'

class ProjetComponent extends React.Component{
  constructor(props){
    super(props)

    // Fake data to delete once API fetch is working
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
      "          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n" +
      "          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum\n" +
      "          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n" +
      "          officia deserunt mollit anim id est laborum."

    // Creating structure of fake data
    this.state = {
      projects: [{
        src: "https://picsum.photos/1920/1080",
        caption: lorem,
        header: "Projet1"
      }, {
        src: "https://picsum.photos/1920/1080",
        caption: lorem,
        header: "Projet2"
      }]
    }
  }

  render() {
    // Debug Log... Is my state beautiful ??
    console.log(this.state)

    return(
        <div className="projet_frame col-sm-auto col-md-9 offset-md-1">
          <UncontrolledCarousel items={this.state.projects} autoPlay={false}/>
        </div>
    )
  }
}

export default ProjetComponent
import React from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators} from 'reactstrap'
import axios from 'axios'

class ProjetComponent extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      projects: [],
      activeIndex: 0
    }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExited = this.onExited.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.getCurrentCaption = this.getCurrentCaption.bind(this)
  }

  componentDidMount() {
    axios.get('/api/projects/get').then(response => {
      this.setState({projects: response.data})
    })
  }

  onExiting = () => {
    this.animating = true
  }

  onExited = () => {
    this.animating = false
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.projects.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({activeIndex: nextIndex})
  }
  
  previous() {
    if (this.animating) return
    const nextIndex = this.state.activeIndex === 0 ? this.state.projects.length - 1 : this.state.activeIndex -1
    this.setState({activeIndex: nextIndex})
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({activeIndex: newIndex})
  }

  getCurrentCaption() {
    if (this.state.projects.length !== 0){
      const {projects, activeIndex} = this.state
      const currentProject = projects[activeIndex]
      return (
        <div>
          <a href={currentProject.url} target="_blank" rel="noopener noreferrer"><h4>{currentProject.header}</h4></a>
          <p>{currentProject.caption}</p>
        </div>
      )
    } else {
      return
    }
  }

  render() {
    return(
        <div className="projet_frame col-sm-12 col-md-8 offset-md-2">
          <h1>Projets</h1>
          <p>
            Ci-dessous vous trouverez un bréve description de chaque projet ainsi que la liste des liens direct vers ses derniers.
          </p>
          <Carousel interval={0} activeIndex={this.state.activeIndex} previous={this.previous} next={this.next}>
            <CarouselIndicators items={this.state.projects} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex}/>
            {this.state.projects.map((item) => (
              <CarouselItem
                onExiting={this.onExiting}
                on Exited={this.onExited}
                key={item._id}
              >
                <img src={item.src} />
              </CarouselItem>
            ))}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} cssModule={{color: "#007bff"}}/>
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
          </Carousel>
          <div className="caption">
            {this.getCurrentCaption()}
          </div>
        </div>
    )
  }
}

export default ProjetComponent
import React from 'react';
import './css/App.scss';
import TitleBar from './components/TitleBar'
import MenuBar from './components/MenuBar'
import HomeComponent from './components/home/HomeComponent'
import ProjetComponent from './components/projet/ProjetComponent'
import CvComponent from './components/cv/CvComponent'
import ContactComponent from './components/contact/ContactComponent'
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      current_page: "home"
    }
  }

  render() {
    return(
        <div className="App">
          <div className="row">
            <div className="col-12">
              <TitleBar title={this.state.current_page}/>
            </div>
          </div>
          <div className="main_layer row">
            <MenuBar/>
            <Router>
              <Route exact path="/" component={HomeComponent}/>
              <Route path="/projets" component={ProjetComponent}/>
              <Route path="/cv" component={CvComponent}/>
              <Route path="/contact" component={ContactComponent}/>
            </Router>
          </div>
        </div>
    )
  }
}

export default App;

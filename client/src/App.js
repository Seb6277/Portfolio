import React from 'react';
import './css/App.scss';
import TitleBar from './components/TitleBar'
import HomeComponent from './components/home/HomeComponent'
import ProjetComponent from './components/projet/ProjetComponent'
import CvComponent from './components/cv/CvComponent'
import ContactComponent from './components/contact/ContactComponent'
import Login from './components/login/Login'
import AdminComponent from './components/admin/AdminComponent'
import {PrivateRoute} from './components/login/PrivateRoute'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {FaGithub, FaTwitter} from 'react-icons/fa'

class App extends React.Component {

  render() {
    return(
        <div className="App">
          <TitleBar/>
          <div className="main_layer row">
            <Router>
              <Route exact path="/" component={HomeComponent}/>
              <Route path="/projets" component={ProjetComponent}/>
              <Route path="/cv" component={CvComponent}/>
              <Route path="/contact" component={ContactComponent}/>
              <Route path="/login" component={Login}/>
              <PrivateRoute exact path="/admin" component={AdminComponent}/>
            </Router>
          </div>
          <div className="footer_row page-footer row">
            <footer className="footer row col-md-8 offset-md-2">
              <a className="github col-md-4 offset-md-3 row" href="https://github.com/Seb6277" target="_blank" rel="noreferrer noopener">
                <div className="git-icon">
                  <FaGithub/>
                </div>
                <div className="github-text">
                  <p>Follow me on Github</p>
                </div>
              </a>
              <a className="twitter col-md-4 row" href="https://twitter.com/seb6277" target="_blank" rel="noreferrer noopener">
                <div className="twitter-icon">
                  <FaTwitter/>
                </div>
                <div className="twitter-text">
                  <p>Twitter</p>
                </div>
              </a>
            </footer>
          </div>
        </div>
    )
  }
}

export default App;

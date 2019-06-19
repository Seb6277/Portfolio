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
        </div>
    )
  }
}

export default App;

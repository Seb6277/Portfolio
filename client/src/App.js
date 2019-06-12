import React from 'react';
import './css/App.css';
import TitleBar from './components/TitleBar'
import MenuBar from './components/MenuBar'
import HomeComponent from './components/home/HomeComponent'

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
          <TitleBar title={this.state.current_page}/>
          <MenuBar/>
          <HomeComponent/>
        </div>
    )
  }
}

export default App;

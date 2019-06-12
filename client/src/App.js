import React from 'react';
import './css/App.scss';
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
          <div className="main_layer">
            <MenuBar/>
            <HomeComponent/>
          </div>
        </div>
    )
  }
}

export default App;

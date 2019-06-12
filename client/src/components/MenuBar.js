import React from 'react'

class MenuBar extends React.Component{
  render() {
    return(
      <div className="menu_bar">
        <ul>
          <li>Accueuil</li>
          <li>Projets</li>
          <li>CV</li>
          <li>Contact</li>
        </ul>
      </div>
    )
  }
}

export default MenuBar
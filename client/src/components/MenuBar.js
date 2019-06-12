import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'

import '../css/MenuBar.scss'

class MenuBar extends React.Component{
  render() {
    return(
      <div className="menu_bar">
        <Nav vertical>
          <NavItem>
            <NavLink href="/">Accueuil</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/projets">Projets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cv">CV</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default MenuBar
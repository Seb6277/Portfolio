import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'

import '../css/MenuBar.scss'

class MenuBar extends React.Component{
  render() {
    return(
      <div className="menu_bar">
        <Nav vertical>
          <hr/>
          <NavItem>
            <NavLink href="/">Accueuil</NavLink>
          </NavItem>
          <hr/>
          <NavItem>
            <NavLink href="/projets">Projets</NavLink>
          </NavItem>
          <hr/>
          <NavItem>
            <NavLink href="/cv">CV</NavLink>
          </NavItem>
          <hr/>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
          <hr/>
        </Nav>
      </div>
    )
  }
}

export default MenuBar
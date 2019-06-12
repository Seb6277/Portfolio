import React from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'

class MenuBar extends React.Component{
  render() {
    return(
      <div className="menu_bar col-md-1 col-sm-12">
        <Nav vertical>
          <hr/>
          <NavItem>
            <NavLink href="/">Accueil</NavLink>
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
import React from 'react'
import {Navbar, Collapse, NavbarToggler, NavbarBrand, NavLink, NavItem, Nav} from 'reactstrap'

class TitleBar extends React.Component{
  constructor(props){
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {collapsed: true}
  }

  toggleNavbar(){
    this.setState({collapsed: !this.state.collapsed})
  }

  render() {
    return(
      <Navbar className="title_bar" color="dark" dark expand="md">
        <NavbarBrand href="/" className="mr-auto">Portfolio</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Accueil</NavLink>
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
        </Collapse>
      </Navbar>
    )
  }
}

export default TitleBar;
import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'react-anchor-link-smooth-scroll'
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import'../App.css';

export default class NavbarComponent extends Component{
    render(){
      return(
            <Navbar id ="navBar" inverse collapseOnSelect style={{marginBottom:0}} >
              <Nav pullRight>
                  <NavItem>
                    <AnchorLink href='#aboutMeSection' style = {{textDecoration: "none", color:"white"}}>About Me</AnchorLink>
                  </NavItem>
                  <NavItem>
                    <AnchorLink href="#portfolioDiv" style = {{textDecoration: "none", color:"white"}}>Portfolio</AnchorLink>
                  </NavItem>
                  <NavItem>
                    <AnchorLink href="#contactMeDiv" style = {{textDecoration: "none", color:"white"}}>Contact Me</AnchorLink>
                  </NavItem>
                  <NavItem>
                    <Link href={"http://stephjbrown.blogspot.com/"} target ="_blank" style = {{textDecoration: "none", color:"white"}}>Blog</Link>
                  </NavItem>
              </Nav> 
            </Navbar>
      );
    };
  }
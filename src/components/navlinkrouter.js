import React, { Component } from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; //index
import { Nav, Navbar, NavItem, Container, NavDropdown } from "react-bootstrap";
import Home from "./home";
import faq  from "./faq";
import MCharacters from "./m-characters";
import FCharacters from "./f-characters";
import Footer from "./footer";



export default function NavLinkRouter() {
  
  
  return(
        <div>
          
          <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
      <NavDropdown title="Male Characters" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/m-characters">Top of Page</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/m-characters/lowain">Lowain</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/m-characters/sin">Sin</NavDropdown.Item>        
          <NavDropdown.Item as={Link} to="/m-characters/azrael">Azrael</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Female Characters" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/f-characters">Top of Page</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/f-characters/laura">Laura</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/f-characters/baiken">Baiken</NavDropdown.Item>        
          <NavDropdown.Item as={Link} to="/f-characters/bullet">Bullet</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </Container>
  </Navbar>
          <div>
            <Switch>
              <Route exact path='/faq' component={faq} />
              <Route exact path="/" component={Home} />
              <Route exact path="/m-characters" component={MCharacters} />
              <Route exact path="/f-characters" component={FCharacters} />
              <Route exact path="/m-characters/lowain" component={MCharacters}/>
              <Route exact path="/m-characters/sin" component={MCharacters}/>
              <Route exact path="/m-characters/azrael" component={MCharacters}/>
              <Route exact path="/f-characters/laura" component={FCharacters}/>
              <Route exact path="/f-characters/baiken" component={FCharacters}/>
              <Route exact path="/f-characters/bullet" component={FCharacters} />
              <Route render={function(){
                return <p>Not Found</p>
              }} />
            </Switch>
            <Footer />
          </div>
        </div>
    
    )
  
  
};


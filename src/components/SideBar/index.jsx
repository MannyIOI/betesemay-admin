import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Container, NavContainer, NavLinks } from "./styles";
export default class NavBar extends Component {
    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    render(){
        return (

          <Container>
            <NavContainer>
              <h2 style={{color: "white", fontWeight: "600", textAlign: "center" ,fontFamily: "Lucida Console"}}>Betesemay</h2>
              <hr color="white" style={{width: "100%", marginBottom: "50px"}}/>
              <NavLinks>
                {this.props.routes.map(item => (
                  <NavLink
                  key={item.to}
                  className={`nav-item`}
                  activeClassName = "active-nav-item"
                  to={item.to}>
                    {item.icon}
                    <span style={{marginLeft: "30px"}}>{item.name}</span>
                  </NavLink>
                ))}
              </NavLinks>
            </NavContainer>
          </Container>

        )
    }
}
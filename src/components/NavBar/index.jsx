import React, { Component } from "react"
import { Container, Inner, NavLinks } from "./styles";
import { NavLink } from "react-router-dom"

export default class NavBar extends Component {
    render(){
        let height = 350;
        // const { pathname } = this.props.history.location
        return (
            <Container height={height}>
                <Inner height={height}>
                    <NavLinks>
                        {this.props.routes.map(item => (
                            <NavLink
                                key={item.to}
                                className={`nav-item`}
                                activeClassName = "active-nav-item"
                                to={item.to}
                            >
                                {item.name}
                            </NavLink>
                        ))}

                    </NavLinks>
                </Inner>
            </Container>
        )
    }
}
import React, { Component } from "react"
import { Container, Inner, NavLinks } from "./styles";
import { NavLink } from "react-router-dom"

class NavBar extends Component {
    render(){
        let height = 350;
        const { pathname } = this.props.history.location
        return (
            <Container height={height}>
                <Inner height={height}>
                    <NavLinks>
                        <Navlink>
                            
                        </Navlink>

                    </NavLinks>
                </Inner>
            </Container>
        )
    }
}
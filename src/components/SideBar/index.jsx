import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Menu, Button } from 'antd';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa"
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
              <h1 style={{color: "white", fontWeight: "500", textAlign: "center" ,fontFamily: "Lucida Console"}}>Betesemay</h1>
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

          // <Menu
          //     defaultSelectedKeys={['1']}
          //     defaultOpenKeys={['sub1']}
          //     mode="inline"
          //     theme="dark"
          //     inlineCollapsed={this.state.collapsed}
          //     style={{  minWidth: '100px', 
          //                 color: "white",
          //                 maxWidth: '250px', 
          //                 height: '100vh',
          //                 display: 'flex',
          //                 background: '#6f4685',
          //                 flexDirection: 'column',
          //                 justifyContent: 'center',
          //                 transition: '1s' }}>

          //       <Button type="primary" onClick={this.toggleCollapsed} style={{ 
          //           marginBottom: 100, minWidth: '40%' ,
          //           maxWidth: '50%', 
          //           alignSelf: 'center' }}>

          //           {this.state.collapsed ? <FaAngleDoubleRight/> : <FaAngleDoubleLeft/>}
          //         </Button>          

          //       {this.props.routes.map(item => (    
          //         <Menu.Item key={item.key}>
                    
          //         </Menu.Item>
          //       ))} 
          //   </Menu>
        )
    }
}
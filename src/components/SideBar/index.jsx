import React, { Component } from "react"
// import { Container, NavLinks, CollapseButton, CollapsedContainer } from "./styles";
import { NavLink } from "react-router-dom"
import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';
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
        // console.log(this.props)
        // let height = 350;
        // const { pathname } = this.props.history.location
        return (
          <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
              style={{minWidth: '100px', 
                          maxWidth: '250px', 
                          height: '100vh',
                          display: 'flex',
                          background: '#596B8D',
                          flexDirection: 'column',
                          justifyContent: 'center'}}>


                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16, alignSelf: "top"}}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>


                {this.props.routes.map(item => (    
                  <Menu.Item key={item.key}>
                    <NavLink
                      key={item.to}
                      className={`nav-item`}
                      activeClassName = "active-nav-item"
                      to={item.to}>
                        {item.icon}
                      <span>{item.name}</span>
                    </NavLink>
                  </Menu.Item>
                ))} 
            </Menu>
        )
    }
}
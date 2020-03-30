import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { Menu, Button } from 'antd';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa"
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
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="light"
                inlineCollapsed={this.state.collapsed}
                style={{minWidth: '100px', 
                            color: "white",
                            maxWidth: '250px', 
                            height: '100vh',
                            display: 'flex',
                            background: '#596B8D',
                            flexDirection: 'column',
                            justifyContent: 'center' }}>

                  <Button type="primary" onClick={this.toggleCollapsed} style={{ 
                      marginBottom: 100, minWidth: '40%' ,
                      maxWidth: '50%', 
                      alignSelf: 'center' }}>

                      {this.state.collapsed ? <FaAngleDoubleRight/> : <FaAngleDoubleLeft/>}
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
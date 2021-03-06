import React from "react"
import SideBar from "../components/SideBar"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"



import ItemsContainer from "../screens/Items";
import CreateItem from "../screens/CreateItem";
import UpdateItem from "../screens/UpdateItem";
import ItemsByCategory from "../screens/ItemsByCategory";
import CollectDispense from "../screens/DispenseCollect";

import EmployeeContainer from "../screens/Employees";
import CreateEmployee from "../screens/CreateEmployee";
import UpdateEmployee from "../screens/UpdateEmployee";
import EmployeeProfile from "../screens/EmployeeProfile";

import CategoryContainer from "../screens/Categories";
import CreateCategory from "../screens/CategoryCreate";
import Search from "../screens/Search";

import Dashboard from "../screens/Dashboard";


import SearchBar from "../components/SearchBar";

import {
    GroupOutlined,
    UserOutlined,
    QuestionOutlined,
    AppstoreOutlined
  } from '@ant-design/icons';


import { Container } from "./styles"

require('dotenv').config()
const routes = [
    {
        key: "5",
        name: "Dashboard",
        to: "/dashboard",
        icon: <AppstoreOutlined />
    },

    {
        key: "1",
        name: "Items",
        to: "/items",
        icon: <GroupOutlined />
    },
    {
        key: "3",
        name: "Employees",
        to: "/employees",
        icon: <UserOutlined />
    },
    {
        key: "4",
        name: "Help",
        to: "/help",
        icon: <QuestionOutlined />
    }
]

const Routes = () => (
    <div>
        <Router>
            <Container>
                <SideBar routes = {routes}/>
                <SearchBar />
                
                <div style={{ gridRow: "2/3", gridColumn: "2/3", height: "88vh"}}>
                    <Switch >
                        <Route exact path = "/" render={() => <Redirect to="/items"/>} />
                        
                        <Route exact path = "/items" component = { ItemsContainer }/>
                        <Route exact path = "/items/create" component = { CreateItem }/>
                        <Route exact path = "/items/update/:itemId" component = { UpdateItem } />
                        <Route exact path = "/items/:itemId" component = { CollectDispense } />

                        <Route exact path = "/employees" component = { EmployeeContainer }/>
                        <Route exact path = "/employees/create" component = { CreateEmployee } />
                        <Route exact path = "/employees/update/:employeeId" component = { UpdateEmployee } />
                        <Route exact path = "/employees/:employeeId" component = { EmployeeProfile } />

                        <Route exact path = "/categories" component = { CategoryContainer } />
                        <Route exact path = "/categories/create" component = { CreateCategory } />
                        <Route exact path = "/categories/:categoryId" component = { ItemsByCategory } />

                        <Route exact path = "/dashboard" component = { Dashboard } />
                        <Route exact path = "/search/:search" component = {Search} />
                    </Switch>
                </div>
            </Container>
        </Router>
    </div>
)

export default Routes;
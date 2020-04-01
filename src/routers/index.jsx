import React from "react"
import SideBar from "../components/SideBar"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import EmployeeContainer from "../screens/Employees";

import ItemsContainer from "../screens/Items";
import CreateItem from "../screens/ItemCreate";
import UpdateItem from "../screens/ItemUpdate";

import ItemsByCategory from "../screens/ItemsByCategory";

import CreateEmployee from "../screens/CreateEmployee";

import CategoryContainer from "../screens/Categories";
import CreateCategory from "../screens/CategoryCreate";

import CollectDispense from "../screens/DispenseCollect";
import {
    OrderedListOutlined,
    GroupOutlined,
    UserOutlined
  } from '@ant-design/icons';


import { Container } from "./styles"
require('dotenv').config()
console.log(process.env.NODE_ENV)
const routes = [
    {
        key: "2",
        name: "Categories",
        to: "/categories",
        icon: <OrderedListOutlined />
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
    }
]

const Routes = () => (
    <div>
        <Router>
            <Container>
                <SideBar routes = {routes}/>
                <Switch>
                    <Route exact path = "/" render={() => <Redirect to="/items"/>} />
                    
                    <Route exact path = "/items" component = { ItemsContainer }/>
                    <Route exact path = "/items/create" component = { CreateItem }/>
                    <Route exact path = "/items/update/:itemId" component = { UpdateItem } />
                    <Route exact path = "/items/:itemId" component = { CollectDispense } />

                    <Route exact path = "/employees" component = { EmployeeContainer }/>
                    <Route exact path = "/employees/create" component = { CreateEmployee } />

                    <Route exact path = "/categories" component = { CategoryContainer } />
                    <Route exact path = "/categories/create" component = { CreateCategory } />
                    <Route exact path = "/categories/:categoryId" component = { ItemsByCategory } />
                </Switch>
                {/* <Route /> */}
            </Container>
        </Router>
    </div>
)

export default Routes;
import React from "react"
import SideBar from "../components/SideBar"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import EmployeeContainer from "../screens/EmployeesScreen";

import ItemsContainer from "../screens/ItemsScreen";
import CreateItem from "../screens/ItemCreateScreen";
import UpdateItem from "../screens/ItemUpdateScreen";

import ItemsByCategory from "../screens/ItemsByCategoryScreen";

import CreateEmployee from "../screens/CreateEmployeeScreen";

import CategoryContainer from "../screens/CategoryScreen";
import CreateCategory from "../screens/CategoryCreateScreen"

import CollectDispense from "../screens/DispenseCollectScreen";

import { Container } from "./styles"
require('dotenv').config()
console.log(process.env.NODE_ENV)
const routes = [
    {
        name: "Categories",
        to: "/categories"
    },
    {
        name: "Items",
        to: "/items"
    },
    {
        name: "Employees",
        to: "/employees"
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
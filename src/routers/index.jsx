import React from "react"
import SideBar from "../components/SideBar"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import EmployeeContainer from "../screens/EmployeesScreen";

import ItemsContainer from "../screens/ItemsScreen";
import CreateItem from "../screens/ItemCreateScreen";
import UpdateItem from "../screens/ItemUpdateScreen";

import CreateEmployee from "../screens/CreateEmployeeScreen";

import CategoryContainer from "../screens/CategoryScreen"

import { Container } from "./styles"


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
                <Route exact path = "/" render={() => <Redirect to="/items"/>} />
                
                <Route exact path = "/items" component = { ItemsContainer }/>
                <Route exact path = "/items/create" component = { CreateItem }/>
                <Route exact path = "/items/update/:itemId" component = { UpdateItem } />

                <Route exact path = "/employees" component = { EmployeeContainer }/>
                <Route exact path = "/employees/create" component = { CreateEmployee } />

                <Route exact path = "/categories" component = { CategoryContainer } />
            </Container>
        </Router>
    </div>
)

export default Routes;
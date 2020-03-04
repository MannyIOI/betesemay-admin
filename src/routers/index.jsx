import React from "react"
import SideBar from "../components/SideBar"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import EmployeeContainer from "../screens/EmployeesScreen";
import ItemsContainer from "../screens/ItemsScreen";

import { Container } from "./styles"
import CreateItem from "../screens/ItemCreateScreen";
const routes = [
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
                <Route exact path = "/items" component = {ItemsContainer}/>
                <Route exact path = "/employees" component = {EmployeeContainer}/>
                <Route exact path = "/items/create" component = {CreateItem}/>
            </Container>
        </Router>
    </div>
)

export default Routes;
import React from "react"
import NavBar from "../components/NavBar"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import EmployeeContainer from "../screens/EmployeesScreen";
import ItemsContainer from "../screens/ItemsScreen";

const routes = [
    {
        name: "Items",
        to: "/items"
    },
    {
        name: "Employees",
        to: "/employees"
    },
    {
        name: "Return Item",
        to: "/return"
    },
    {
        name: "Login",
        to: "login"
    }
]

const Routes = () => (
    <div>
        <Router>
            <NavBar routes = {routes}/>
            <Route exact path = "/" render={() => <Redirect to="/items"/>} />
            <Route exact path = "/items" component = {ItemsContainer}/>
            <Route exact path = "/employees" component = {EmployeeContainer}/>
        </Router>
    </div>
)

export default Routes;
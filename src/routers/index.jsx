import React from "react"
import SideBar from "../components/SideBar"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import EmployeeContainer from "../screens/EmployeesScreen";
import ItemsContainer from "../screens/ItemsScreen";
import CreateItem from "../screens/ItemCreateScreen";
import CreateEmployee from "../screens/CreateEmployeeScreen";

import { Container } from "./styles"
import UpdateItem from "../screens/ItemUpdateScreen";


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
                <Route exact path = "/items" component = { ItemsContainer }/>
                <Route exact path = "/employees" component = { EmployeeContainer }/>
                <Route exact path = "/items/create" component = { CreateItem }/>
                <Route exact path = "/items/update/:itemId" component = { UpdateItem } />
                <Route exact path = "/employees/create" component = { CreateEmployee } />
            </Container>
        </Router>
    </div>
)

export default Routes;
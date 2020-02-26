import React from "react"
import NavBar from "../components/NavBar"

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
        <NavBar />
    </div>
)

export default Routes;
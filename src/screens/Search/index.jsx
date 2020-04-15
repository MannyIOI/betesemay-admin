import React, { useState, useEffect } from 'react'
import { Container, 
            FilterContainer, 
            ResultContainer, 
            ItemsContainer, 
            CategoriesContainer, 
            EmployeesContainer } from './style'
import { Select } from 'antd'

const Search = ({ match }) => {
    const [searchFor, setSearchFor] = useState("item")
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        if(searchFor==="item"){
            // Search for items
        } else if (searchFor === "employee"){
            // Search for employees
        } else if (searchFor === "category"){
            // Search for categories
        }
    })
    return (
        <Container>
            <FilterContainer>
                <p>Search for</p>
                <Select defaultValue="item" onChange={(value)=>{setSearchFor(value)}}>
                    <Select.Option value="item">Items</Select.Option>
                    <Select.Option value="category">Categories</Select.Option>
                    <Select.Option value="employee">Employees</Select.Option>
                </Select>
            </FilterContainer>

            <ResultContainer>
                Results
                { searchFor === "item" && <ItemsContainer>
                    {items.map(item => {console.log(item)})}
                </ItemsContainer> }
                { searchFor === "category" && <CategoriesContainer>
                    {categories.map(category => {console.log(category)})}
                </CategoriesContainer>}
                { searchFor === "employee" && <EmployeesContainer>
                    {employees.map(employee => {console.log(employee)})}
                </EmployeesContainer>}
            </ResultContainer>
        </Container>
    )
}

export default Search;
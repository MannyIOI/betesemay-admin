import React, { useState, useEffect } from 'react'
import { Container, 
            FilterContainer, 
            ResultContainer, 
            ItemsContainer, 
            CategoriesContainer, 
            EmployeesContainer } from './style'
import { Select } from 'antd'
import { withApollo } from 'react-apollo'
import { SEARCH_ITEMS, SEARCH_EMPLOYEES, SEARCH_CATEGORIES } from './queries'
import Item from '../../components/Item';
import Category from '../../components/Category'
import Employee from '../../components/Employee'

const Search = ({ client, match }) => {
    const [searchFor, setSearchFor] = useState("employee")
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        console.log("New Search")
    }, [match.params.search])

    useEffect(() => {
        if (searchFor === "employee"){
            client.query({
                query: SEARCH_EMPLOYEES,
                variables: {
                    q: match.params.search,
                    page: 0,
                    limit: 5
                }
            }).then(res => {
                console.log(res.data.searchEmployees.results.length === 0)
                if(res.data.searchEmployees.results.length === 0){ 
                    setSearchFor("category")
                } else {
                    setEmployees(res.data.searchEmployees.results)
                }
            }).catch(error => {
                console.log(error)
            })
            
        } else if (searchFor === "category"){
            // Search for categories
            client.query({
                query: SEARCH_CATEGORIES,
                variables: {
                    title: match.params.search,
                    page: 0,
                    limit: 5
                }
            }).then(res => {
                if(res.data.searchCategories.results.length === 0){ 
                    setSearchFor("item")
                } else {
                    setCategories(res.data.searchCategories.results)
                }
            }).catch(error => {
                console.log(error)
            })
        }else if(searchFor==="item"){
            // Search for Items
            client.query({
                query: SEARCH_ITEMS,
                variables: {
                    title: match.params.search,
                    page: 0,
                    limit: 5
                }
            }).then(res => {
                setItems(res.data.searchItems.results)
            }).catch(error => {
                console.log(error)
            })
        }
    }, [setCategories, setEmployees, setItems, match.params.search, searchFor, client])
    return (
        <Container>
            <FilterContainer>
                <Select defaultValue={searchFor} value={searchFor} onChange={(value)=>{setSearchFor(value)}}>
                    <Select.Option value="item">Search for Items</Select.Option>
                    <Select.Option value="category">Search for Categories</Select.Option>
                    <Select.Option value="employee">Search for Employees</Select.Option>
                </Select>
            </FilterContainer>

            <ResultContainer>
                { searchFor === "item" && <ItemsContainer>
                    { items.map(item => <Item item={item} key={item.id} /> )}
                </ItemsContainer> }
                { searchFor ===  "category" && <CategoriesContainer>
                    { categories.map(category => <Category category={category} key={category.id} />)}
                </CategoriesContainer>}
                { searchFor === "employee" && <EmployeesContainer>
                    { employees.map(employee => <Employee employee={employee} key={employee.id} /> )}
                </EmployeesContainer>}
            </ResultContainer>
        </Container>
    )
}

export default withApollo(Search);
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

const Search = ({ client, match }) => {
    const [searchFor, setSearchFor] = useState("item")
    const [items, setItems] = useState([])
    const [categories, setCategories] = useState([])
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        if(searchFor==="item"){
            // Search for Items
            client.query({
                query: SEARCH_ITEMS,
                variables: {
                    title: match.params.search,
                    page: 0,
                    limit: 5
                }
            }).then(res => {
                console.log(res)
                setItems(res.data.searchItems.results)
            }).catch(error => {
                console.log(error)
            })
        } else if (searchFor === "employee"){
            // Search for employees
            client.query({
                query: SEARCH_EMPLOYEES,
                variables: {
                    title: match.params.search,
                    page: 0,
                    limit: 5
                }
            }).then(res => {
                console.log(res)
                setEmployees([])
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
                console.log(res)
                setCategories([])
            }).catch(error => {
                console.log(error)
            })
        }
    }, [setCategories, setEmployees, setItems, match.params.search, searchFor, client])
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
                    { items.map(item => <Item item={item} /> )}
                </ItemsContainer> }
                { searchFor ===  "category" && <CategoriesContainer>
                    { categories.map(category => <div></div>)}
                </CategoriesContainer>}
                { searchFor === "employee" && <EmployeesContainer>
                    { employees.map(employee => <div></div> )}
                </EmployeesContainer>}
            </ResultContainer>
        </Container>
    )
}

export default withApollo(Search);
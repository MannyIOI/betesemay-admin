import React, { useState, useEffect } from 'react'
import { Container, NavigationContainer } from "./style"
import { withApollo } from 'react-apollo'

import Category from "../../components/Category"
import { GET_ALL_CATEGORIES } from "./queries";
import { PrevButton, NextButton, CreateButton } from '../EmployeesScreen/style';

const CategoriesPage = (props) => {
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(0)
    const [itemCount, setCategoryCount] = useState(0);

    const setNewCategories = async () =>{ 
        try {
            const { data } = await props.client.query({
                query: GET_ALL_CATEGORIES,
                variables: { page }
            })
            setCategories(data.getAllCategories.results)
            setCategoryCount(data.getAllCategories.total)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{ setNewCategories() });

    const onNextClicked = async () => {
        setPage(page+1)
    }
    const onPrevClicked = async () => {
        setPage(page-1)
    }
    
    return (
        <Container>
            { categories.map(category => (<Category key = { category.id } 
                                                    category = { category } 
                                                    refreshCategories = { setNewCategories } 
                                                    history = { props.history } />)) }
            
            <NavigationContainer> 
                
                <PrevButton onClick={onPrevClicked} disabled={page<=0}>Previous</PrevButton>
                <CreateButton onClick={()=>props.history.push({pathname: "/categories/create/"})}>Create</CreateButton>
                <NextButton onClick={onNextClicked} disabled={(page)*11 + categories.length>=itemCount}>Next</NextButton>
            </NavigationContainer>
        </Container>
    )
}

export default withApollo(CategoriesPage)
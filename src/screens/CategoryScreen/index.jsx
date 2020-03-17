import React, { useState, useEffect } from 'react'
import { Container, NavigationContainer} from "./style"
import { withApollo } from 'react-apollo'

import Category from "../../components/Category"
import { GET_ALL_CATEGORIES } from "./queries";

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
            console.log(data)
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
                
                <button onClick={onPrevClicked} disabled={page<=0}>Previous</button>
                <button onClick={onNextClicked} disabled={(page)*11 + categories.length>=itemCount}>Next</button>
                <button onClick={()=>props.history.push({pathname: "/categories/create/"})}>Create</button>
            </NavigationContainer>
        </Container>
    )
}

export default withApollo(CategoriesPage)
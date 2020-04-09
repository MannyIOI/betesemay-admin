import React, { useState, useEffect } from 'react'
import { Container, NavigationContainer} from "./style"
import { PrevButton, NextButton, CreateButton } from '../Employees/style'
import { withApollo } from 'react-apollo'

import Item from "../../components/Item"
import { GET_ITEMS_BY_CATEGORY } from "./queries";
import Loading from '../../components/Loading'

const ItemsPage = (props) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0)
    const [itemCount, setItemCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    
    const setNewItems = async () =>{ 
        try {
            props.client.query({
                query: GET_ITEMS_BY_CATEGORY,
                variables: { page, category: props.match.params.categoryId },
                fetchPolicy: 'network-only'
            }).then(res => {
                setIsLoading(false)
                setItems(res.data.getItemsByCategory.results)
                setItemCount(res.data.getItemsByCategory.total)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{ setNewItems() });

    const onNextClicked = async () => {
        setIsLoading(true)
        setPage(page+1)
    }
    const onPrevClicked = async () => {
        setIsLoading(true)
        setPage(page-1)
    }
    
    return (
        <Container>
            { items.map(item => (<Item key = {item.id} item={item} refreshItems={setNewItems} history={props.history} />)) }
            
            <NavigationContainer> 
                
                <PrevButton onClick={onPrevClicked} disabled={page<=0}>Previous</PrevButton>
                <CreateButton onClick={()=>props.history.push({pathname: "/items/create/"})}>Create</CreateButton>
                <NextButton onClick={onNextClicked} disabled={(page)*11 + items.length>=itemCount}>Next</NextButton>
                <Loading isLoading={isLoading}/>
            </NavigationContainer>
        </Container>
    )
}

export default withApollo(ItemsPage)
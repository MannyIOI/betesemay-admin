import React, { useState, useEffect } from 'react'
import { Container, NavigationContainer} from "./style"
import { withApollo } from 'react-apollo'

import Item from "../../components/Item"
import { GET_ALL_ITEMS } from "./queries";

const ItemsPage = (props) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0)
    const [itemCount, setItemCount] = useState(0);

    const setNewItems = async () =>{ 
        try {
            const { data } = await props.client.query({
                query: GET_ALL_ITEMS,
                variables: { page }
            })
            
            setItems(data.getAllItems.results)
            setItemCount(data.getAllItems.total)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{ setNewItems() });

    const onNextClicked = async () => {
        setPage(page+1)
    }
    const onPrevClicked = async () => {
        setPage(page-1)
    }
    
    return (
        <Container>
            { items.map(item => (<Item key = {item.id} item={item}/>)) }
            
            <NavigationContainer> 
                
                <button onClick={onPrevClicked} disabled={page<=0}>Previous</button>
                <button onClick={onNextClicked} disabled={(page)*11 + items.length>=itemCount}>Next</button>
                <button onClick={()=>props.history.push({pathname: "/items/create/"})}>Create</button>
            </NavigationContainer>
        </Container>
    )
}

export default withApollo(ItemsPage)
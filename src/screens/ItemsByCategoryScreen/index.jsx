import React, { useState, useEffect } from 'react'
import { Container, NavigationContainer} from "./style"
import { withApollo } from 'react-apollo'

import Item from "../../components/Item"
import { GET_ITEMS_BY_CATEGORY } from "./queries";

const ItemsPage = (props) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0)
    const [itemCount, setItemCount] = useState(0);
    
    const setNewItems = async () =>{ 
        console.log(props.match.params.categoryId)
        try {
            props.client.query({
                query: GET_ITEMS_BY_CATEGORY,
                variables: { page, category: props.match.params.categoryId }
            }).then(res => {
                setItems(res.data.getItemsByCategory.results)
                setItemCount(res.data.getItemsByCategory.total)
            })
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
            { items.map(item => (<Item key = {item.id} item={item} refreshItems={setNewItems} history={props.history} />)) }
            
            <NavigationContainer> 
                
                <button onClick={onPrevClicked} disabled={page<=0}>Previous</button>
                <button onClick={onNextClicked} disabled={(page)*11 + items.length>=itemCount}>Next</button>
                <button onClick={()=>props.history.push({pathname: "/items/create/"})}>Create</button>
            </NavigationContainer>
        </Container>
    )
}

export default withApollo(ItemsPage)
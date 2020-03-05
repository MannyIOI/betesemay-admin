import React, { useState, useEffect } from 'react'
import { Container, NavigationContainer} from "./style"
import { withApollo } from 'react-apollo'

import Item from "../../components/Item"
import { GET_ALL_ITEMS } from "./queries";

const ItemsPage = (props) => {
    const [items, setItems] = useState([]);

    const setNewItems = async () =>{ 
        try {
            const { data } = await props.client.query({
                query: GET_ALL_ITEMS
            });
            setItems(data.getAllItems)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{ setNewItems() });
    
    return (
        <Container>
            { items.map(item => (<Item key = {item.name} item={item}/>)) }
            
            <NavigationContainer> 
                <button>Previous</button>
                <button>Next</button>
                <button onClick={()=>props.history.push({pathname: "/items/create/"})}>Create</button>
            </NavigationContainer>
        </Container>
    )
}

export default withApollo(ItemsPage)
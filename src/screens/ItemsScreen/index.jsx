import React, { useState, useEffect } from 'react'
import { Container, NavigationContainer} from "./style"
import { withApollo } from 'react-apollo'

import Item from "../../components/Item"
import { GET_ALL_ITEMS } from "./queries";

const ItemsPage = ({ client }) => {
    const [items, setItems] = useState([]);

    const setNewItems = async () =>{ 
        try {
            const { data } = await client.query({
                query: GET_ALL_ITEMS
            });
            setItems(data.getAllItems)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() =>{ setNewItems() }, []);
    // console.log(items.map, items)
    return (
        <Container>
            { items.map(item => (<Item key = {item.name} item={item}/>)) }
            
            <NavigationContainer> 
                Nav Region
            </NavigationContainer>
        </Container>
    )
}

export default withApollo(ItemsPage)
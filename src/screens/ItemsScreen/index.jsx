import React, { useState, useEffect } from 'react'
import { Container, NavigationContainer} from "./style"
import { withApollo } from 'react-apollo'

import Item from "../../components/Item"
import { GET_ALL_ITEMS } from "./queries";
import { PrevButton, NextButton, CreateButton } from '../EmployeesScreen/style';

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
            { items.map(item => (<Item key = {item.id} item={item} refreshItems={setNewItems} history={props.history} />)) }
            
            <NavigationContainer> 
                
                
                <PrevButton onClick={onPrevClicked} disabled={page<=0}>Previous</PrevButton>
                <CreateButton onClick={()=>props.history.push({pathname: "/items/create/"})}>Create</CreateButton>
                <NextButton onClick={onNextClicked} disabled={(page)*11 + items.length>=itemCount}>Next</NextButton>

            </NavigationContainer>
        </Container>
    )
}

export default withApollo(ItemsPage)
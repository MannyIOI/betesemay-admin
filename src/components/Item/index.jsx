import React from 'react'
import { withApollo } from "react-apollo";
import { Container, ItemActionsContainer, ItemTitleContainer, ItemDetailContainer } from "./styles"
import { DELETE_ITEM } from './queries'

const Item = (props) => {
    const deleteItem = async () =>{ 
        let id = props.item.id;
        try {
            await props.client.mutate({
                mutation: DELETE_ITEM,
                variables: { id }
            })
            props.history.go({pathname: "/items/"})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container onClick={()=>props.history.push({pathname: "/items/"+props.item.id})}>
            
            <ItemTitleContainer>
                <h2>{props.item.title}</h2>
            </ItemTitleContainer>

            <ItemDetailContainer>
                <p>{props.item.description}</p>
                <p>D.P {props.item.dispense_period}</p>
                <p>{props.item.state}</p>
            </ItemDetailContainer>

            <ItemActionsContainer>
                <button onClick={()=>props.history.push({pathname: "/items/update/"+props.item.id})}>Update</button>
                <button onClick={deleteItem}>Delete</button>
            </ItemActionsContainer>
        </Container>
    )
}

export default withApollo(Item);
import React from 'react'
import { withApollo } from "react-apollo";
import { Container, ItemInfoContainer, ItemActionsContainer, ItemTitleContainer, ItemDetailContainer } from "./styles"
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
        <Container>
            
            <ItemInfoContainer >
                <ItemTitleContainer>
                    <h2>{props.item.name}</h2>
                </ItemTitleContainer>
                <ItemDetailContainer>
                    <p>{props.item.description}</p>
                    <p>Total Count - {props.item.count}</p>
                </ItemDetailContainer>
            </ItemInfoContainer>

            <ItemActionsContainer>
                <button onClick={()=>props.history.push({pathname: "/items/update/"+props.item.id})}>Update</button>
                <button onClick={deleteItem}>Delete</button>
            </ItemActionsContainer>
        </Container>
    )
}

export default withApollo(Item);
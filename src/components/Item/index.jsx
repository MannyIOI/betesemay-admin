import React from 'react'
import { withApollo } from "react-apollo";
import { Container, ItemInfoContainer, ItemActionsContainer, ItemTitleContainer, ItemDetailContainer } from "./styles"
import { DELETE_ITEM } from './queries'

const Item = (props) => {
    // const client = props.client
    // const refresh = props.refreshItems
    // console.log(refresh)

    const deleteItem = async () =>{ 
        let id = props.item.id;
        try {
            await props.client.mutate({
                mutation: DELETE_ITEM,
                variables: { id }
            })
            await props.refreshItems()
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

            <ItemActionsContainer onClick={deleteItem}>x</ItemActionsContainer>
        </Container>
    )
}

export default withApollo(Item);
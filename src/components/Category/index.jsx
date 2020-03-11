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
                    <h2>{props.category.title}</h2>
                </ItemTitleContainer>
            </ItemInfoContainer>
        </Container>
    )
}

export default withApollo(Item);
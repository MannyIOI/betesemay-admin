import React from 'react'
import { withApollo } from "react-apollo";
import { Container, 
            ItemActionsContainer, 
            ItemTitleContainer, 
            ItemDetailContainer, 
            UpdateButton, 
            DeleteButton,
            Title,
            Text } from "./styles"
import { DELETE_ITEM } from './queries'
import { 
    FaPen,
    FaDumpster
} from 'react-icons/fa'

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

    const updateItem = async () => {
        props.history.push({pathname: "/items/"+props.item.id})
    }

    return (
        <Container >
            
            <ItemTitleContainer onClick={updateItem}>
                <Title>{props.item.title}</Title>
            </ItemTitleContainer>

            <ItemDetailContainer onClick={updateItem}>
                <Text>{props.item.description}</Text>
                {/* <Text>D.P {props.item.dispense_period}</Text> */}
                <Text>{props.item.state}</Text>
            </ItemDetailContainer>

            <ItemActionsContainer>
                <UpdateButton onClick={()=>props.history.push({pathname: "/items/update/"+props.item.id})}>
                    <FaPen color="white"/>
                </UpdateButton>
                <DeleteButton onClick={deleteItem}>
                    <FaDumpster color="white"/>
                </DeleteButton>
            </ItemActionsContainer>
        </Container>
    )
}

export default withApollo(Item);
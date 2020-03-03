import React from 'react'

import { Container, ItemInfoContainer, ItemActionsContainer, ItemTitleContainer, ItemDetailContainer } from "./styles"

export default (props) => {
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

            <ItemActionsContainer/>
        </Container>
    )
}

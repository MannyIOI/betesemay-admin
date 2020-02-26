import React, { Component } from 'react'

import { Container, ItemInfoContainer, ItemActionsContainer, ItemTitleContainer, ItemDetailContainer } from "./styles"

export default class Item extends Component {
    render() {
        return (
            <Container>
                
                <ItemInfoContainer >
                    <ItemTitleContainer>
                        <h2>Item Title</h2>
                    </ItemTitleContainer>
                    <ItemDetailContainer>
                        <p>Item Description</p>
                        <p>Total Count - 1</p>
                    </ItemDetailContainer>
                </ItemInfoContainer>
                <ItemActionsContainer>
                    <p>></p>
                </ItemActionsContainer>
            </Container>
        )
    }
}

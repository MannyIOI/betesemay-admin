import React from 'react'
import { withApollo } from "react-apollo";
import { Container, CategoryInfoContainer, CategoryTitleContainer } from "./styles"

const Category = (props) => {
    return (
        <Container>
            <CategoryInfoContainer >
                <CategoryTitleContainer>
                    <h2>{props.category.title}</h2>
                </CategoryTitleContainer>
            </CategoryInfoContainer>
        </Container>
    )
}

export default withApollo(Category);
import React from 'react'
import { withApollo } from "react-apollo";
import { Container, CategoryTitleContainer, Title } from "./styles"

const Category = ({ history, category }) => {
    return (
        <Container onClick={()=>history.push({pathname: "/categories/"+category.id})}>
            <CategoryTitleContainer>
                <Title>{category.title}</Title>
            </CategoryTitleContainer>
        </Container>
    )
}

export default withApollo(Category);
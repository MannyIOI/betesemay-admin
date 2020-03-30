import React from 'react'
import { withApollo } from "react-apollo";
import { Container, CategoryTitleContainer, Title } from "./styles"

const Category = (props) => {
    return (
        <Container onClick={()=>props.history.push({pathname: "/categories/"+props.category.id})}>
            <CategoryTitleContainer>
                <Title>{props.category.title}</Title>
            </CategoryTitleContainer>
        </Container>
    )
}

export default withApollo(Category);
import React from 'react'
import { Container, CategoryTitleContainer, Title } from "./styles"
import { withRouter } from 'react-router-dom';

const Category = ({ history, category }) => {
    return (
        <Container onClick={()=>history.push({pathname: "/categories/"+category.id})}>
            <CategoryTitleContainer>
                <Title>{category.title}</Title>
            </CategoryTitleContainer>
        </Container>
    )
}

export default withRouter(Category);
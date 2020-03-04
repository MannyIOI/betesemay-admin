import React from 'react'
import { withApollo } from 'react-apollo'
import { Container, Input, FormContainer, SubmitBtn } from "./style";

const CreateItem = ({client}) => {
    return (
        <Container>
            <FormContainer>
                <Input placeholder="Item Name"/>
                <Input placeholder="Item Description"/>
                <SubmitBtn>Create Item</SubmitBtn>
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateItem);
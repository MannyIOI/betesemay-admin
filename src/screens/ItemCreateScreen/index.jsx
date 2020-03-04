import React, { useState } from 'react'
import { withApollo } from 'react-apollo'
import { Container, Input, FormContainer, SubmitBtn } from "./style";
import { CREATE_ITEM } from "./queries";

const CreateItem = ({client}) => {
    const [ name, setName ] = useState("")
    const [ description, setDescription ] = useState("")
    
    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleDescChange = e => {
        setDescription(e.target.value)
    }

    const createNewItem = async () => {
        try {
            const { data } = await client.mutate({
                mutation: CREATE_ITEM,
                variables: { name: name, desc: description }
            });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <FormContainer>
                <Input placeholder="Item Name" onChange={handleNameChange}/>
                <Input placeholder="Item Description" onChange={handleDescChange}/>
                <SubmitBtn onClick={createNewItem}>Create Item</SubmitBtn>
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateItem);
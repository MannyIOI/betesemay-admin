import React from 'react'
import { withApollo } from 'react-apollo'
import { Container, Input, FormContainer, SubmitBtn } from "./style";
import { CREATE_ITEM } from "./queries";
import { useInput } from "../../hooks/inputHooks";

const CreateItem = ({client}) => {
    const { value: name, bind: bindName } = useInput("")
    const { value: description, bind: bindDesc } = useInput("")

    const createNewItem = async () => {
        try {
            await client.mutate({
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
                <Input placeholder="Item Name" {...bindName} />
                <Input placeholder="Item Description" {...bindDesc}/>
                <SubmitBtn onClick={createNewItem}>Create Item</SubmitBtn>
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateItem);
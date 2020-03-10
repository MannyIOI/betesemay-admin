import React from 'react'
import { withApollo } from 'react-apollo'
import { Container, Input, FormContainer, SubmitBtn } from "./style";
import { CREATE_ITEM } from "./queries";
import { useInput } from "../../hooks/inputHooks";

const CreateItem = ({client, history}) => {
    const { value: category, bind: bindCategory } = useInput("eb126f3d-ba1a-408a-9048-fb78e2d765b3")
    const { value: title, bind: bindTitle } = useInput("item-")
    const { value: description, bind: bindDesc } = useInput("description")
    const { value: dispense_period, bind: bindDispensePeriod } = useInput(2)
    const { value: quantity, bind: bindQuantity } = useInput(3)
    const { value: in_coffin, bind: bindInCoffin } = useInput(2)

    const createNewItem = async () => {
        try {
            await client.mutate({
                mutation: CREATE_ITEM,
                variables: { category: category,
                             title: title, 
                             desc: description,
                             dispense_period: dispense_period,
                             quantity: quantity,
                             in_coffin: in_coffin
                            }
            });
            await history.push({pathname: "/items/"})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <FormContainer>
                <Input placeholder="Category Id" { ...bindCategory } />
                <Input placeholder="Title" { ...bindTitle } />
                <Input placeholder="Description" { ...bindDesc } />
                <Input placeholder="Dispense Period" type="number" { ...bindDispensePeriod } />
                <Input placeholder="Total Quantity" type="number" { ...bindQuantity } />
                <Input placeholder="In Coffin Quantity" type="number" { ...bindInCoffin } />
                <SubmitBtn onClick={createNewItem}>Create Item</SubmitBtn>
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateItem);
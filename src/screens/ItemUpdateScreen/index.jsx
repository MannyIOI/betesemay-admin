import React, { useEffect } from 'react'
import { withApollo } from 'react-apollo'
import { Container, Input, FormContainer, SubmitBtn } from "./style";
import { UPDATE_ITEM, GET_ITEM } from "./queries";
import { useInput } from "../../hooks/inputHooks";

const UpdateItem = ({client, history, match}) => {
    const { value: item_id, bind: bindItemId } = useInput(match.params.itemId)
    const { value: category, setValue: setCategory, bind: bindCategory } = useInput("")
    const { value: title, setValue: setTitle, bind: bindTitle } = useInput("")
    const { value: description, setValue: setDescription, bind: bindDesc } = useInput("")
    const { value: dispense_period, setValue: setDispensePeriod } = useInput(0)
    const { value: quantity, setValue: setQuantity, bind: bindQuantity } = useInput(0)
    const { value: in_coffin, setValue: setInCoffin, bind: bindInCoffin } = useInput(0)

    const updateItem = async () => {
        try {
            await client.mutate({
                mutation: UPDATE_ITEM,
                variables: { id: item_id,
                             category: category,
                             title: title, 
                             desc: description,
                             dispense_period: parseInt(dispense_period),
                             quantity: parseInt(quantity),
                             in_coffin: parseInt(in_coffin)
                            }
            });
            await history.push({pathname: "/items/"})
        } catch (error) {
            console.log(error)
        }
    }

    const getItem = async () => {
        console.log("here")
        const get_item = await client.query({
            query: GET_ITEM,
            variables: { id: match.params.itemId }
        })
        setItem(get_item.data.getItem)
    }

    const setItem = ({category, title, description, dispense_period, quantity, in_coffin}) => {
        setCategory(category)
        setTitle(title)
        setDescription(description)
        setDispensePeriod(dispense_period)
        setQuantity(quantity)
        setInCoffin(in_coffin)
    }

    useEffect(() => { getItem() })

    return (
        <Container>
            <FormContainer>
                Item Id <Input placeholder="Item Id" value={match.params.itemId} { ...bindItemId } disabled />
                Category Id <Input placeholder="Category Id" {...bindCategory} />
                Title <Input placeholder="Title" { ...bindTitle } />
                Description <Input placeholder="Description" { ...bindDesc } />
                {/* Dispense Period <Input placeholder="Dispense Period" type="number" { ...bindDispensePeriod } /> */}
                Total Quantity <Input placeholder="Total Quantity" type="number" { ...bindQuantity } />
                In Coffin <Input placeholder="In Coffin Quantity" type="number" { ...bindInCoffin } />
                <SubmitBtn onClick={updateItem}>Update Item</SubmitBtn>
            </FormContainer>
        </Container>
    )
}

export default withApollo(UpdateItem);
import React, { useState, useEffect } from 'react'
import Select from "react-select";
import { withApollo } from 'react-apollo'
import { Container, Input, FormContainer, SubmitBtn } from "./style";
import { CREATE_ITEM } from "./queries";
import { useInput } from "../../hooks/inputHooks";
import { GET_ALL_CATEGORIES } from '../CategoryScreen/queries';

const CreateItem = ({client, history}) => {
    const { value: categories, setValue: setCategories} = useInput([]);
    const [ category, setCategory ] = useState("")
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

    
    // let name = 0;
    useEffect(() => { 
        console.log("jere")
        try {
            client.query({
                query: GET_ALL_CATEGORIES,
                variables: { page: 0 }
            }).then(res => {
                let categories = []
                res.data.getAllCategories.results.forEach(category => {
                    categories.push({label: category.title, value: category.id})
                });
                setCategories(categories)
            })
        } catch (error) {
            console.log(error)
        }
     }, [client, setCategories]);

    return (
        <Container>
            <FormContainer>
                <Select options={categories} onChange={(e)=>setCategory(e.value)}/>
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
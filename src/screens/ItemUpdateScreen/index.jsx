import React, { useEffect, useState } from 'react'
import Select from "react-select"
import { withApollo } from 'react-apollo'
import { Container, Input, FormContainer, SubmitBtn } from "./style";
import { UPDATE_ITEM, GET_ITEM } from "./queries";
import { useInput } from "../../hooks/inputHooks";
import { GET_ALL_CATEGORIES } from '../CategoryScreen/queries';

const UpdateItem = ({client, history, match}) => {
    const { value: item_id, bind: bindItemId } = useInput(match.params.itemId)
    
    const { value: categories, setValue: setCategories} = useInput([]);
    const [ category, setCategory ] = useState("")
    // const [ title, setTitle ] = useState("")
    const { value: title, setValue: setTitle, bind: bindTitle } = useInput("")
    const { value: description, setValue: setDescription, bind: bindDesc } = useInput("")
    const { value: dispense_period, setValue: setDispensePeriod } = useInput(0)

    const updateItem = async () => {
        try {
            await client.mutate({
                mutation: UPDATE_ITEM,
                variables: { id: item_id,
                             category: category,
                             title: title, 
                             desc: description,
                             dispense_period: parseInt(dispense_period)
                            }
            });
            await history.push({pathname: "/items/"})
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => { 
        const setItem = ({category, title, description, dispense_period}) => {
            setCategory(category.id)
            setTitle(title)
            setDescription(description)
            setDispensePeriod(dispense_period)
        }

            client.query({
                query: GET_ITEM,
                variables: { id: match.params.itemId }
            }).then(res => {
                setItem(res.data.getItem)
            })
     }, [client, match, setCategory, setTitle, setDescription, setDispensePeriod])

    useEffect(() => { 
        try {
            client.query({
                query: GET_ALL_CATEGORIES,
                variables: { page: 0 }
            }).then(res => {
                let categories = []
                res.data.getAllCategories.results.forEach(category => {
                    categories.push({ label: category.title, value: category.id })
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
                Item Id <Input placeholder="Item Id" value={match.params.itemId} { ...bindItemId } disabled />
                Category Id <Select options={categories} onChange={(e)=>setCategory(e.value)}/>
                Title <Input placeholder="Title" {...bindTitle} />
                Description <Input placeholder="Description" { ...bindDesc } />
                {/* Dispense Period <Input placeholder="Dispense Period" type="number" { ...bindDispensePeriod } /> */}
                <SubmitBtn onClick={updateItem}>Update Item</SubmitBtn>
            </FormContainer>
        </Container>
    )
}

export default withApollo(UpdateItem);
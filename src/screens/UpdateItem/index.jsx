import React, { useEffect, useState } from 'react'
import Select from "react-select"
import { withApollo } from 'react-apollo'
import { Container, FormContainer } from "./style";
import { Input } from '../CreateEmployee/style'
import { UPDATE_ITEM, GET_ITEM } from "./queries";
import { useInput } from "../../hooks/inputHooks";
import { GET_ALL_CATEGORIES } from '../Categories/queries';
import CreateButton from '../../components/CreateButton';

const UpdateItem = ({client, history, match}) => {
    const { value: item_id, bind: bindItemId } = useInput(match.params.itemId)
    
    const { value: categories, setValue: setCategories} = useInput([]);
    const [ category, setCategory ] = useState("")
    // const [ title, setTitle ] = useState("")
    const { value: title, setValue: setTitle, bind: bindTitle } = useInput("")
    const { value: description, setValue: setDescription, bind: bindDesc } = useInput("")
    const { value: dispense_period, setValue: setDispensePeriod } = useInput(0)
    const [isLoading, setIsLoading] = useState(true)

    const updateItem = async () => {
        try {
            await client.mutate({
                mutation: UPDATE_ITEM,
                variables: { id: item_id,
                             category: category,
                             title: title, 
                             desc: description,
                             dispense_period: parseInt(dispense_period)
                            },
                refetchQueries: [{ query: GET_ITEM, variables: { id: item_id }}],
                awaitRefetchQueries: true
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
                setIsLoading(false)
            })
     }, [client, match, setCategory, setTitle, setDescription, setDispensePeriod, setIsLoading])

    useEffect(() => { 
        client.query({
            query: GET_ALL_CATEGORIES,
            variables: { page: 0, limit: 10 }
        }).then(res => {
            let categories = []
            res.data.getAllCategories.results.forEach(category => {
                categories.push({ label: category.title, value: category.id })
            });
            setCategories(categories)
        }).catch(error => {
            console.log(error)
        })
     }, [client, setCategories]);   

    return (
        <Container>
            <FormContainer>

                <h2 style={{color: "#6f4685", fontWeight: "700", textAlign: "center"}}>Update Item</h2>
                <Input placeholder="Item Id" value={match.params.itemId} { ...bindItemId } disabled />
                <Select options={categories} onChange={(e)=>setCategory(e.value)}/>
                <Input placeholder="Title" {...bindTitle} />
                <Input placeholder="Description" { ...bindDesc } />
                <CreateButton title="Update Item" isLoading={isLoading} onClickHandler={updateItem} />
            </FormContainer>
        </Container>
    )
}

export default withApollo(UpdateItem);
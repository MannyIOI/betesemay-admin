import React, { useState, useEffect } from 'react'
import Select from "react-select";
import { withApollo } from 'react-apollo'
import { Container, FormContainer, NumberInput } from "./style";
import { Input } from '../CreateEmployeeScreen/style'
import { CREATE_ITEM } from "./queries";
import { useInput } from "../../hooks/inputHooks";
import { GET_ALL_CATEGORIES } from '../CategoryScreen/queries';
import { CreateButton } from '../EmployeesScreen/style';

const CreateItem = ({client, history}) => {
    const { value: categories, setValue: setCategories} = useInput([]);
    const [ category, setCategory ] = useState("")
    const { value: title, bind: bindTitle } = useInput("item-")
    const { value: description, bind: bindDesc } = useInput("description")
    const { value: dispense_period, bind: bindDispensePeriod } = useInput(2)

    const createNewItem = async () => {
        try {
            await client.mutate({
                mutation: CREATE_ITEM,
                variables: { category: category,
                             title: title, 
                             desc: description,
                             dispense_period: dispense_period
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
                setCategory(categories[0].value)
            })
        } catch (error) {
            console.log(error)
        }
     }, [client, setCategories]);

    return (
        <Container>
            <FormContainer>
                
                <h2 style={{color: "#6f4685", fontWeight: "700", textAlign: "center"}}>Create Item</h2>
                <Select options={categories} onChange={(e)=>setCategory(e.value)} defaultValue={category}/>
                <Input placeholder="Title" { ...bindTitle } />
                <Input placeholder="Description" { ...bindDesc } />
                <NumberInput placeholder="Dispense Period" type="number" { ...bindDispensePeriod } />
                <CreateButton onClick={createNewItem}>Create Item</CreateButton>
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateItem);
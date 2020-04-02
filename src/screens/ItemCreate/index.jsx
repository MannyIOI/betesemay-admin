import React, { useState, useEffect } from 'react'
import Select from "react-select";
import { withApollo } from 'react-apollo'
import { Container, FormContainer } from "./style";
import { Input } from '../CreateEmployee/style'
import { CREATE_ITEM } from "./queries";
import { useInput } from "../../hooks/inputHooks";
import { GET_ALL_CATEGORIES } from '../Categories/queries';
import { CreateButton } from '../Employees/style';
import { BeatLoader } from 'react-spinners';

const CreateItem = ({client, history}) => {
    const { value: categories, setValue: setCategories} = useInput([]);
    const [ category, setCategory ] = useState("")
    const { value: title, bind: bindTitle } = useInput("")
    const { value: description, bind: bindDesc } = useInput("")
    const { value: dispense_period, bind: bindDispensePeriod } = useInput(2)
    const [isLoading, setIsLoading] = useState(true)

    const createNewItem = async () => {
        try {
            setIsLoading(true)
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
                setIsLoading(false)
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
                <Input placeholder="Dispense Period" type="number" { ...bindDispensePeriod } />
                <CreateButton onClick={createNewItem} disabled ={isLoading} style={isLoading?
                                                                {border: '3px solid #6f4685', 
                                                                    background: "#E0E5EC", 
                                                                    width: '40%'}:
                                                                {border: '0px'}}>

                    {!isLoading ? 'Create Category' : <BeatLoader color={"#0073cf"} loading={isLoading}/>}
                </CreateButton>
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateItem);
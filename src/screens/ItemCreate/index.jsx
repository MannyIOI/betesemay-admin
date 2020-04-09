import React, { useState, useEffect } from 'react'
import Select from "react-select";
import { withApollo } from 'react-apollo'
import { Container, FormContainer } from "./style";
import { Input } from '../CreateEmployee/style'
import { CREATE_ITEM } from "./queries";
import { GET_ALL_ITEMS } from '../Items/queries';
import { GET_ITEMS_BY_CATEGORY } from '../ItemsByCategory/queries'
import { useInput } from "../../hooks/inputHooks";
import { GET_ALL_CATEGORIES } from '../Categories/queries';
// import { CreateButton } from '../Employees/style';
import CreateButton from '../../components/CreateButton'
// import { BeatLoader } from 'react-spinners';

const CreateItem = ({client, history}) => {
    const { value: categories, setValue: setCategories} = useInput([]);
    const [ category, setCategory ] = useState("")
    const { value: title, bind: bindTitle } = useInput("")
    const { value: description, bind: bindDesc } = useInput("")
    const { value: dispense_period, bind: bindDispensePeriod } = useInput(2)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    const validate = () => {
        let val = false
        if ( category === "" ) { setError("* Please select a category")}
        else if(title === "") { setError("* Item title can not be empty") }
        else if ( description === "" ) { setError("( Item description can not be empty") }
        else if ( dispense_period === 0 ) { setError("* Dispense Period should be greater than 0") }
        else { val = true }
        return val
    }

    const submitHandler = () => {
        if(validate()){ createNewItem() }
    }

    const createNewItem = async () => {
        console.log("creating new Item")
        setIsLoading(true)
        await client.mutate({
            mutation: CREATE_ITEM,
            variables: { category: category,
                            title: title, 
                            desc: description,
                            dispense_period: dispense_period
                        },
            refetchQueries: [{ query: GET_ALL_ITEMS, 
                                variables: { page: 0 } }, 
                            { query: GET_ITEMS_BY_CATEGORY, 
                                variables: { page: 0, category: category } }],
            
            awaitRefetchQueries: true
        }).then(_ => {
            console.log("created")
            history.push({pathname: "/items/"})
        }).catch(error => {
            // setIsLoading(false)
            setError(error)
        })
    }

    useEffect(() => { 
        try {
            setIsLoading(true)
            client.query({
                query: GET_ALL_CATEGORIES,
                variables: { page: 0 }
            }).then(res => {
                let categories = []
                res.data.getAllCategories.results.forEach(category => {
                    categories.push({label: category.title, value: category.id})
                });
                setCategories(categories)
                if(categories.length === 0){
                    setError("* Please create a category first ")
                }else{
                    setIsLoading(false)
                }
                
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
                { error==="" ? "" : <p style={{color: 'red', display: 'inline'}}>
                                        {error} 
                                        { error !== "" && categories.length === 0 ? 
                                            <span onClick={()=> {history.push({pathname: "/categories/create/"})}}
                                            style={{color: "blue", 
                                                    cursor: "pointer",
                                                    display: 'inline'}}>
                                                Create Category
                                            </span> : ""}
                                    </p> }
                <CreateButton title="Create item" isLoading={isLoading} onClickHandler={submitHandler}/>
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateItem);
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
import CreateButton from '../../components/CreateButton'
import axios from 'axios'

const CreateItem = ({client, history}) => {
    const { value: categories, setValue: setCategories} = useInput([]);
    const [ category, setCategory ] = useState("")
    const { value: title, bind: bindTitle } = useInput("")
    const { value: description, bind: bindDesc } = useInput("")
    const { value: dispense_period, bind: bindDispensePeriod } = useInput(0)
    const [file, setFile] = useState("")
    let imageId = ""
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const validate = () => {
        let val = false
        if ( category === "" ) { setError("* Please select a category")}
        else if(title === "") { setError("* Item title can not be empty") }
        else if ( description === "" ) { setError("( Item description can not be empty") }
        else if ( dispense_period === 0 ) { setError("* Dispense Period should be greater than 0") }
        else if ( file === "" ) { setError("Please select image file for the item") }
        else { val = true }
        return val
    }

    const submitHandler = async () => {
        if(validate()){ createNewItem() }
        
    }

    const createNewItem = async () => {
        console.log(imageId==="")
        if(imageId === ""){
            const formdata = new FormData()
            formdata.append('file', file)
            formdata.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
            setIsLoading(true)
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formdata
            )
            imageId = response.data.public_id
        }
        await client.mutate({
            mutation: CREATE_ITEM,
            variables: { category: category,
                            title: title, 
                            desc: description,
                            dispense_period: parseInt(dispense_period),
                            imageId: imageId
                        },
            refetchQueries: [{ query: GET_ALL_ITEMS, 
                                variables: { page: 0, limit: 10 } },
                            { query: GET_ALL_ITEMS, 
                                    variables: { page: 0, limit: 3 } }, 
                            { query: GET_ITEMS_BY_CATEGORY, 
                                variables: { page: 0, category: category } }],
            
            awaitRefetchQueries: true
        }).then(_ => {
            history.push({pathname: "/items/"})
        }).catch(error => {
            setError(error)
        })
    }

    useEffect(() => { 
        try {
            setIsLoading(true)
            client.query({
                query: GET_ALL_CATEGORIES,
                variables: { page: 0, limit: 10 }
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
                <h2 style={{color: "#1F88A7", fontWeight: "700", textAlign: "center"}}>Create Item</h2>
                <Select options={categories} onChange={(e)=>setCategory(e.value)} defaultValue={category}/>
                <Input placeholder="Title" { ...bindTitle } />
                <Input placeholder="Description" { ...bindDesc } />
                <Input placeholder="Dispense Period" type="number" { ...bindDispensePeriod } />
                <Input type="file" onChange={(e) => setFile(e.target.files[0])}/>
                
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
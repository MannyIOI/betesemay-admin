import React from 'react'
import { withApollo } from 'react-apollo'
import { Container, FormContainer } from "./style";
import { useInput } from "../../hooks/inputHooks";
import { CREATE_CATEGORY } from './queries';
import { GET_ALL_CATEGORIES } from "../Categories/queries";
import { CreateButton } from '../Employees/style';
import { Input } from '../CreateEmployee/style';
import { useState } from 'react';
import { BeatLoader } from 'react-spinners';

const CreateCategory = ({ client, history }) => {
    const { value: category, bind: bindCategory } = useInput("")
    const [isLoading, setIsLoading] = useState(false)

    const createCategory = async () => {
        setIsLoading(true)
        await client.mutate({
            mutation: CREATE_CATEGORY,
            variables: { title: category },
            refetchQueries: [ { query: GET_ALL_CATEGORIES, variables: { page: 0 } } ],
            awaitRefetchQueries: true
        });

        history.push({pathname: "/categories"})
    }

    return (
        <Container>
            <FormContainer>
                
                <h2 style={{color: "#6f4685", fontWeight: "700", textAlign: "center"}}>Create Category</h2>
                <Input placeholder="Category Category" { ...bindCategory }/>
                <CreateButton onClick={createCategory} disabled ={isLoading} style={isLoading?
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

export default withApollo(CreateCategory);
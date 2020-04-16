import React from 'react'
import { withApollo } from 'react-apollo'
import { Container, FormContainer } from "./style";
import { useInput } from "../../hooks/inputHooks";
import { CREATE_CATEGORY } from './queries';
import { GET_ALL_CATEGORIES } from "../Categories/queries";
import CreateButton from '../../components/CreateButton'
import { Input } from '../CreateEmployee/style';
import { useState } from 'react';

const CreateCategory = ({ client, history }) => {
    const { value: category, bind: bindCategory } = useInput("")
    const [isLoading, setIsLoading] = useState(false)

    const createCategory = async () => {
        setIsLoading(true)
        await client.mutate({
            mutation: CREATE_CATEGORY,
            variables: { title: category },
            refetchQueries: [ { query: GET_ALL_CATEGORIES, variables: { page: 0, limit: 10 } } ],
            awaitRefetchQueries: true
        });

        history.push({pathname: "/dashboard"})
    }

    return (
        <Container>
            <FormContainer>
                
                <h2 style={{color: "#1F88A7", fontWeight: "700", textAlign: "center"}}>Create Category</h2>
                <Input placeholder="Category Category" { ...bindCategory }/>
                <CreateButton isLoading={isLoading} title="Create Category" onClickHandler={createCategory} />
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateCategory);
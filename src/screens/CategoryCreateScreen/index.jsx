import React from 'react'
import { withApollo } from 'react-apollo'
import { Container, Input, FormContainer, SubmitBtn } from "./style";
import { useInput } from "../../hooks/inputHooks";
import { CREATE_CATEGORY } from './queries';

const CreateCategory = ({ client, history }) => {
    // const { value: categories, setValue: setCategories} = useInput([]);
    // const [ category, setCategory ] = useState("")
    const { value: category, bind: bindCategory } = useInput("")

    // useEffect(() => { 
    //     try {
    //         client.query({
    //             query: GET_ALL_CATEGORIES,
    //             variables: { page: 0 }
    //         }).then(res => {
    //             let categories = []
    //             res.data.getAllCategories.results.forEach(category => {
    //                 categories.push({label: category.title, value: category.id})
    //             });
    //             setCategories(categories)
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    //  }, [client, setCategories]);
    
    // useEffect(() => {
    //     console.log(category)
    //     // client.mutate({
    //     //     mutation: CREATE_CATEGORY,
    //     //     variables: { title: category }
    //     // })
    // }, [client, category])

    const createCategory = async () => {
        await client.mutate({
            mutation: CREATE_CATEGORY,
            variables: { title: category }
        });

        history.push({pathname: "/categories"})
    }

    return (
        <Container>
            <FormContainer>
                <Input placeholder="Category Category" { ...bindCategory }/>
                <SubmitBtn onClick={createCategory}>Create Category</SubmitBtn>
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateCategory);
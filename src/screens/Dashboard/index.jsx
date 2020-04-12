import React, { useState, useEffect } from 'react'
import { Image } from "cloudinary-react";
import { Container, 
            SearchInput, 
            AccountContainer, 
            ContentContainer, 
            ActivityContainer, 
            CreateContainer,
            Create, 
            CategoryContainer, 
            ArrowContainer,
            AccountImage} from './styles'
import Category from "../../components/Category";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import { GET_ALL_CATEGORIES } from './queries';
import { withApollo } from 'react-apollo';

const Dashboard = ({client, history}) => {
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    
    const setNewCategories = async () =>{ 
        try {
            const { data } = await client.query({
                query: GET_ALL_CATEGORIES,
                variables: { page },
                fetchPolicy: 'catch-and-network',
            })
            setIsLoading(false)
            setCategories(data.getAllCategories.results)
            setCategoryCount(data.getAllCategories.total)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect   (() =>{ setNewCategories() });

    const onNextClicked = async () => {
        setIsLoading(true)
        setPage(page+1)
    }
    const onPrevClicked = async () => {
        setIsLoading(true)
        setPage(page-1)
    }

    return (
        <Container>
            <SearchInput placeholder="Search Items, Categories, Employees" />
            <AccountContainer>
                <AccountImage>
                    <Image 
                        cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} 
                        publicId="msiedvan1380uwvzfhk7"/>
                </AccountImage>
                <div>
                    <h3 style={{marginBottom: 0, fontWeight: 700, color: "white"}}>Samuel Tamirat</h3>
                    <a style={{color: "red", textDecoration: "underline"}} href="./employees">Log out</a>
                </div>
            </AccountContainer>
            <ContentContainer>
                <CreateContainer>
                    <Create onClick={()=>history.push({pathname: "/items/create/"})}>
                        <FaPlus style={{alignSelf: "center", justifySelf: "center"}}/>
                        <p>Create Item</p>
                    </Create>
                    <Create onClick={()=>history.push({pathname: "/categories/create/"})}>
                        <FaPlus color="white" style={{alignSelf: "center", justifySelf: "center"}}/>
                        <p>Create Category</p>
                    </Create>
                    <Create onClick={()=>history.push({pathname: "/employees/create/"})}>
                        <FaPlus color="white" style={{alignSelf: "center", justifySelf: "center"}}/>
                        <p>Create Employee</p>
                    </Create>
                </CreateContainer>
                <CategoryContainer>
                    <ArrowContainer>
                        <FaArrowLeft size="30" style={{alignSelf: "center", justifySelf: "center"}}/>
                    </ArrowContainer>
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
                        { categories.map(category => (<Category key = { category.id } 
                                                    category = { category } 
                                                    refreshCategories = { setNewCategories } 
                                                    history = { history } />)) }
                    </div>
                    <ArrowContainer>
                        <FaArrowRight size="30" style={{alignSelf: "center", justifySelf: "center"}}/>
                    </ArrowContainer>
                </CategoryContainer>
            </ContentContainer>
            <ActivityContainer  >
                Activity
            </ActivityContainer>
        </Container>
    )
}

export default withApollo(Dashboard)
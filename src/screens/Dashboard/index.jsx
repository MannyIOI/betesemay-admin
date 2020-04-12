import React, { useState } from 'react'
import { Container, 
            SearchInput, 
            AccountContainer, 
            ContentContainer, 
            ActivityContainer, 
            CreateContainer,
            Create, 
            CategoryContainer, 
            ArrowContainer} from './styles'
import Category from "../../components/Category";
import { FaCross, FaArrowLeft, FaArrowRight, FaPlus, FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Dashboard = ({history}) => {
    // const [categories, setCategories] = useState([{},{},{},{}])
    return (
        <Container>
            <SearchInput placeholder="Search Items, Categories, Employees" />
            <AccountContainer>
                Create Account
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
                        <Category category={{title: "1"}}/>
                        <Category category={{title: "2"}}/>
                        <Category category={{title: "1"}}/>
                        <Category category={{title: "2"}}/>
                        <Category category={{title: "1"}}/>
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

export default Dashboard
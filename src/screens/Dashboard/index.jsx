import React from 'react'
import { Container, 
            SearchInput, 
            AccountContainer, 
            ContentContainer, 
            ActivityContainer, 
            CreateContainer,
            Create } from './styles'

import { FaCross } from "react-icons/fa";

const Dashboard = ({history}) => {
    return (
        <Container>
            <SearchInput placeholder="Search Items, Categories, Employees" />
            <AccountContainer>
                Create Account
            </AccountContainer>
            <ContentContainer>
                <CreateContainer>
                    <Create onClick={()=>history.push({pathname: "/items/create/"})}>
                        <FaCross style={{alignSelf: "center", justifySelf: "center"}}/>
                        <p>Create Item</p>
                    </Create>
                    <Create onClick={()=>history.push({pathname: "/categories/create/"})}>
                        <FaCross color="white" style={{alignSelf: "center", justifySelf: "center"}}/>
                        <p>Create Category</p>
                    </Create>
                    <Create onClick={()=>history.push({pathname: "/employees/create/"})}>
                        <FaCross color="white" style={{alignSelf: "center", justifySelf: "center"}}/>
                        <p>Create Employee</p>
                    </Create>
                </CreateContainer>
                
            </ContentContainer>
            <ActivityContainer  >
                Activity
            </ActivityContainer>
        </Container>
    )
}

export default Dashboard
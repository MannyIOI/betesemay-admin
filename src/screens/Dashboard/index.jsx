import React from 'react'
import { Container, SearchInput, AccountContainer, ContentContainer, ActivityContainer, CreateContainer } from './styles'

const Dashboard = () => {
    return (
        <Container>
            <SearchInput placeholder="Search Items, Categories, Employees" />
            <AccountContainer>
                Create Account
            </AccountContainer>
            <ContentContainer>
                <CreateContainer>
                    Create Item, Create Category, Create Employee
                </CreateContainer>
                
            </ContentContainer>
            <ActivityContainer  >
                Activity
            </ActivityContainer>
        </Container>
    )
}

export default Dashboard
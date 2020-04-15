import React from 'react'
import { withApollo } from 'react-apollo'
import { Container, ActivityContainer, ImageContainer, InfoContainer } from './style'


const EmployeeProfile = () => {
    return (
        <Container>
            <ImageContainer />
            <InfoContainer />
            <ActivityContainer>
                
            </ActivityContainer>
            

        </Container>
    )
}

export default withApollo(EmployeeProfile)
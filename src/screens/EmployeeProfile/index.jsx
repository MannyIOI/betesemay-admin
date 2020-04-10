import React from 'react'
import { Image } from 'cloudinary-react'
import { Container, CardContainer, Header, Body, Category } from './style'

export const EmployeeProfile = () => {
    return (
        <Container>
            <CardContainer>
                <Header>
                    <Image 
                        cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} 
                        publicId='iybjfrukworqecqfoqz1'
                        style={{width: "100%", height: "100%"}} />
                </Header>
                <Body>
                    <Category>
                        Category
                    </Category>
                    <h2>Item Title</h2>
                    <Description>
                        Description
                    </Description>
                </Body>
            </Description>
        </Container>
    )
}

import React from 'react'
import { Image } from 'cloudinary-react'
import { Container, ImageContainer, DetailContainer } from './style'

const Employee = ({ employee }) => {
    return (
        <Container>
            <ImageContainer>
                <Image 
                    cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} 
                    publicId="msiedvan1380uwvzfhk7"/>
            </ImageContainer>
            <DetailContainer>
                <p>{employee.first_name + " " + employee.last_name}</p>
                <p>Joined {new Date(parseInt(employee.created_at)).toDateString()}</p>
                <p>{employee.email}</p>
                <p>Role - {employee.role}</p>
            </DetailContainer>
            
        </Container>
    )
}

export default Employee

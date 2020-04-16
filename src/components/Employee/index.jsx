import React from 'react'
import { Image } from 'cloudinary-react'
import { Container, ImageContainer, DetailContainer } from './style'
import { withRouter } from 'react-router-dom'

const Employee = ({ employee, history }) => {
    const onClick = () => {
        history.push("/employees/"+employee.id)
    }
    return (
        <Container onClick={onClick}>
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

export default withRouter(Employee)
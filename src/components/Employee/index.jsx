import React from 'react'
import { Container } from './style'

const Employee = ({ employee }) => {
    return (
        <Container>
            {employee.first_name}
        </Container>
    )
}

export default Employee

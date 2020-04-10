import React from 'react'
import { Image } from 'cloudinary-react'
import { Container, CardContainer, Header, Body, Category, Description, Actions } from './style'
// import { UpdateButton, DeleteButton } from '../../components/Item/styles'
import Item from '../../components/Item'
import { FaPen, FaDumpster } from 'react-icons/fa'

export const EmployeeProfile = () => {
    return (
        <Container>
            <Item /><Item /><Item />
            <Item /><Item /><Item />
            <Item /><Item /><Item />
            <Item /><Item /><Item />
        </Container>
    )
}

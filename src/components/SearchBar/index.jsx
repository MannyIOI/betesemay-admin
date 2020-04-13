import React from 'react'
import { Image } from 'cloudinary-react'
import { SearchInput, AccountImage, AccountContainer, Container } from './styles'

export const SearchBar = () => {
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
        </Container>
    )
}

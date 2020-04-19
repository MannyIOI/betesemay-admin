import React, { useState } from 'react'
import { Image } from 'cloudinary-react'
import { SearchInput, AccountImage, AccountContainer, Container } from './styles'
import { withRouter } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';


const SearchBar = ({ history }) => {
    const [search, setSearch] = useState("")
    const onSearch = (e) => {
        if(e.keyCode === 13){
            // ENTER Clicked
            history.push("/search/"+search)
        }
    }

    return (
        <Container>
            <SearchInput 
                placeholder="Search Items, Categories, Employees" 
                onKeyUp={onSearch} 
                onChange={(e)=>{setSearch(e.target.value)}}
                prefix={<SearchOutlined/>}
                />
                {/* <Input size="large" placeholder="large size" prefix={<UserOutlined />} /> */}
            <AccountContainer>
                <AccountImage>
                    <Image 
                        cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} 
                        publicId="msiedvan1380uwvzfhk7"/>
                </AccountImage>
                <div>
                    <h3 style={{marginBottom: 0, fontWeight: 700, color: "white"}}>Samuel Tamirat</h3>
                    <a style={{color: "white", textDecoration: "underline"}} href="./employees">Log out</a>
                </div>
            </AccountContainer>
        </Container>
    )
}

export default withRouter(SearchBar)
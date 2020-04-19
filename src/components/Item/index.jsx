import React, { useState } from 'react'
import { withApollo } from "react-apollo";

import { Image } from 'cloudinary-react'
import { Card, Header, Body, Category, Description, Actions, UpdateButton, DeleteButton } from './styles'

import { DELETE_ITEM } from './queries'
import { 
    FaPen,
    FaDumpster
} from 'react-icons/fa'
import { GET_ALL_ITEMS } from '../../screens/Items/queries';
import { DotLoader } from 'react-spinners';

import { css } from "@emotion/core";
import { withRouter } from 'react-router-dom';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: #0073cf;
    position: absolute;
    left: 40%;
    
`;

const Item = (props) => {
    const [isDeleting, setIsDeleting] = useState(false)
    const deleteItem = async () =>{ 
        setIsDeleting(true)
        
        let id = props.item.id;
        try {
            await props.client.mutate({
                mutation: DELETE_ITEM,
                variables: { id },
                refetchQueries: [{ query: GET_ALL_ITEMS, variables: { page: 0, limit: 10 }}],
                awaitRefetchQueries: true
            })

            props.history.push({pathname: "/items/"})
        } catch (error) {
            console.log(error)
        }
    }

    const updateItem = async () => {
        props.history.push({pathname: "/items/update/" + props.item.id})
    }

    const onItemClick = async () => {
        props.history.push({pathname: "/items/" + props.item.id})
    }

    return (
        <Card>
            <Header onClick={onItemClick}>
                <Image 
                    cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} 
                    publicId={props.item.imageId} />
            </Header>
            <Body>
                
                <Category onClick={onItemClick}>
                    {props.item.category.title}
                </Category>
                <Actions>
                    {!isDeleting &&
                        <> 
                            <UpdateButton onClick={updateItem}><FaPen color="white"/></UpdateButton>
                            <DeleteButton onClick={deleteItem}><FaDumpster color="white"/></DeleteButton>
                        </>
                    }
                </Actions>
                {!isDeleting ?
                    <div onClick={onItemClick}>
                        <h1>{props.item.title}</h1>
                        <Description>
                            <p>{props.item.description}</p>
                            <p>{props.item.state}</p>
                        </Description>
                        <div/>
                    </div>
                    :
                    <DotLoader 
                        css={override}
                        color="red" 
                        size={50} />
                }
            </Body>
        </Card>
    )
}

export default withApollo(withRouter(Item));
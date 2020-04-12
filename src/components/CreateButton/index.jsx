import React from 'react'
import { BeatLoader } from 'react-spinners'
import { CreateButton } from './styles'

export default ({ title, isLoading, onClickHandler }) => {
    return (
        <CreateButton onClick={ onClickHandler }
                        disabled ={ isLoading } 
                        style={ isLoading?{
                            background: "#E0E5EC",
                            alignSelf: 'center', 
                            width: '40%'} :
                            
                            { border: '0px'}}>

            {!isLoading ? title : <BeatLoader color={"#0073cf"} loading={isLoading}/>}
        </CreateButton>
    )
}

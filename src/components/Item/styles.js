import styled from "styled-components"

export const ItemActionsContainer = styled.div`
    display: none;
    flex: column;
    color: white;
    grid-row: 1/3;
    grid-column: 8/13;
    margin: 10px;
`
export const Title = styled.h2`
    color: ${props => props.theme.themeColor1};
    font-weight: 600;
    font-size: 25px;
`

export const ItemDetailContainer = styled.div`
    padding: 20px;
    grid-row: 4/10;
    grid-column: 1/13;
    color: white;
    border-radius: 40px 0px 8px 8px;
    // background: ${props=>props.theme.backgroundColor};
`

export const Container = styled.div`
    // height: 25%;
    display: grid;
    border-radius: 10px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 10%);
    margin: 25px;
    cursor: pointer;
    ${props => props.theme.neumorphic}
    // background: ${props=>props.theme.themeColor1};
    // background: #6f4685;
    transition: 0.25s;
    &:hover ${ItemActionsContainer} { 
        display: flex;
        justify-content: center;
    }
    :hover {
        ${props => props.theme.neumorphicHover};
    }
    // &:hover ${Title} {
    //     color: ${props => props.theme.themeColor1};
    // }
    &:hover ${ItemDetailContainer} {
        ${props => props.theme.neumorphic}
    }
`

export const ItemTitleContainer = styled.div`
    display: flex;
    grid-column: 1/13;
    grid-row: 2/4;
    text-align: center;
    align-items: center;
    justify-content: center;
`



export const UpdateButton = styled.button`
    background: #b87333;
    border: 0px;
    grid-column: 8/10;
    border-radius: 10px 0px 0px 10px;
    cursor: pointer;
    :hover {
        background: #b88933;
    }
    :active {
        background: #b87322;
    }
`

export const DeleteButton = styled.button`
    background: #c04000;
    border: 0px;
    grid-column: 10/12;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;
    :hover {
        background: #E04000;
    }
    :active {
        background: #A04000;
    }
`


export const Text = styled.p`
    color: ${props=>props.theme.themeColor4};
    font-weight: 100;
    font-size: 16px;
`

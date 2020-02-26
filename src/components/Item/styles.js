import styled from "styled-components"

export const Container = styled.div`
    height: 10%;
    min-width: 300px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 15px;
`

export const ItemInfoContainer = styled.div`
    background: lightgrey;
    grid-column: 1/5;
    width:100%;
`

export const ItemTitleContainer = styled.div`
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ItemDetailContainer = styled.div`
    padding: 20px;
`

export const ItemActionsContainer = styled.div`
    background: #0073cf;
    grid-column: 5/6;
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 40px;
    cursor: pointer;
    p {
        margin: 0px;
    }

    :hover {
        background: #00008b;
    }
    :active {
        background: green;
    }
`
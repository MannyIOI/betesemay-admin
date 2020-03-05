import styled from "styled-components"

export const Container = styled.div`
    // height: 25%;
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    margin: 25px;
    cursor: pointer;
    background: #596B8D;
`

export const ItemInfoContainer = styled.div`
    grid-column: 1/15;
    width:100%;
    color: white;
`

export const ItemTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

export const ItemDetailContainer = styled.div`
    padding: 20px;
`

export const ItemActionsContainer = styled.div`
    background: red;
    grid-column: 15/16;
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
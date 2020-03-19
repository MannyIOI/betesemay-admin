import styled from "styled-components"

export const ItemActionsContainer = styled.div`
    // background: red;
    display: none;
    flex: column;
    color: white;
    grid-row: 1/2;
    grid-column: 9/13;
    :hover {
        // background: #D04D2E;
    }
    :active {
        // background: green;
    }
`

export const Container = styled.div`
    // height: 25%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(8, 10%);
    margin: 25px;
    cursor: pointer;
    background: #596B8D;
    &:hover ${ItemActionsContainer} { 
        display: flex;
        justify-content: center;
    }
`

export const ItemTitleContainer = styled.div`
    display: flex;
    grid-column: 1/13;
    grid-row: 2/3;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: white;
`

export const ItemDetailContainer = styled.div`
    padding: 20px;
    grid-row: 3/10;
    grid-column: 1/13;
    color: white;
`


import styled from "styled-components"

export const ItemActionsContainer = styled.div`
    display: none;
    flex: column;
    color: white;
    grid-row: 1/3;
    grid-column: 8/13;
    margin: 10px;
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

export const UpdateButton = styled.button`
    background: #b87333;
    border: 0px;
    grid-column: 8/10;
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
    :hover {
        background: #E04000;
    }
    :active {
        background: #A04000;
    }
`
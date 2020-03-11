import styled from "styled-components"

export const Container = styled.div`
    // height: 25%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 10%);
    margin: 25px;
    cursor: pointer;
    background: #596B8D;
    &:hover ${ItemActionsContainer} { 
        display: flex;
        justify-content: center;
    }
`

export const CategoryInfoContainer = styled.div`
    grid-column: 1/12;
    grid-row: 1/10
    width:100%;
    color: white;
`

export const CategoryTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

export const CategoryDetailContainer = styled.div`
    padding: 20px;
`


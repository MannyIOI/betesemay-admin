import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    margin: 25px;
    cursor: pointer;
    background: #6f4685;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.25s;
    :hover {
        background-color:#6f4685;
        box-shadow: 9px 9px 16px #6f4685, -9px -9px 16px rgba(255,255,255, 0.5);
    }
`

export const CategoryInfoContainer = styled.div`
    grid-column: 1/12;
    grid-row: 1/10
    width:100%;
    color: white;
`

export const CategoryTitleContainer = styled.div`
    grid-row: 2/3;
    grid-column: 2/12;
    display: flex;
    justify-content: center;
`

export const CategoryDetailContainer = styled.div`
    padding: 20px;
`

export const Title = styled.h2`
    color: white;
    font-weight: 500;
    font-size: 25px;
    align-self: center;
`
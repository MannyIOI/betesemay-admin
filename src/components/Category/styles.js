import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    border-radius: 10px;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    display: grid;
    margin: 10px;
    cursor: pointer;
    ${props => props.theme.neumorphic};
    transition: 0.25s;
    :hover {
        ${props => props.theme.neumorphicHover};
    }
`

export const CategoryInfoContainer = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;
    width:100%;
    color: white;
`

export const CategoryTitleContainer = styled.div`
    grid-row: 2/3;
    grid-column: 2/3;
    display: flex;
    justify-content: center;
`

export const CategoryDetailContainer = styled.div`
    padding: 20px;
`

export const Title = styled.h2`
    color: ${props=>props.theme.themeColor4};
    font-weight: 500;
    font-size: 25px;
    align-self: center;
`
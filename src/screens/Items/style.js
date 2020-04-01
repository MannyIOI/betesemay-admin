import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
    background-color:#E0E5EC;
    
`

export const NavigationContainer = styled.div`
    min-width: 25%;
    margin: 25px;
    grid-column: 4/5;
    grid-row: 3/4;
    display: flex;
    justify-content: center;
    align-items: center;
`
import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    // width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    
`

export const NavigationContainer = styled.div`
    min-width: 25%;
    margin: 10px;
    grid-column: 5/6;
    grid-row: 3/4;
    display: flex;
    justify-content: center;
    align-items: center;
`
import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    background: #EAEAEA;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
    height: 100vh;
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
import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
    height: 100vh;

    background-color:#E0E5EC;
    // box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
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
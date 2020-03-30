import styled from "styled-components";

export const Container = styled.div`
    background: #EAEAEA;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
`

export const TableContainer = styled.div`
    grid-column: 2/3;
    grid-row: 2/4;
`

export const InfoContainer = styled.div`
    grid-row: 1/2;
    grid-column: 2/3;
`
export const ActionContainer = styled.div`
    grid-column: 2/3;
    display: flex;
    flex-direction: row-reverse;
    margin: 50px;

`
import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    background: #EAEAEA;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    width: 90%;
`

export const TableContainer = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
`
export const ActionContainer = styled.div`
    grid-column: 3/4;
    grid-row: 3/4;
`
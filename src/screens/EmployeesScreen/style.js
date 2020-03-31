import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    background: #EAEAEA;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    width: 100%;
`

export const TableContainer = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
`
export const ActionContainer = styled.div`
    grid-column: 3/4;
    grid-row: 3/4;
`

export const NextButton = styled.button`
    background: #7f4685;
    color: white;
    border: 0px;
    border-radius: 0px 10px 10px 0px;
    margin: 1px;
    padding: 10px;
    font-size: 15px;
    :disabled {
        background: grey;
    }
    :active {
        background: green;
    }
    :hover {
        background: #8f4685;
        cursor: pointer;
    }
`

export const PrevButton = styled.button`
    background: #7f4685;
    color: white;
    border: 0px;
    border-radius: 10px 0px 0px 10px;
    margin: 1px;
    padding: 10px;
    font-size: 15px;
    :disabled {
        background: grey;
    }
    :active {
        background: green;
    }
    :hover {
        background: #8f4685;
        cursor: pointer;
    }
`

export const CreateButton = styled.button`
    background: #6f4685;
    color: white;
    border: 0px;
    border-radius: 5px;
    margin: 1px;
    padding: 10px;
    font-size: 15px;
    :disabled {
        background: grey;
    }
    :active {
        background: green;
    }
    :hover {
        background: #8f4685;
        cursor: pointer;
    }
`
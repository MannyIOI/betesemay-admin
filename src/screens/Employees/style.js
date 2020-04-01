import styled from "styled-components";
import { MDBTable } from "mdbreact";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    width: 100%;
    background-color:#E0E5EC;
`

export const TableContainer = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
`

export const Table = styled(MDBTable)`
    width: 100%;
    text-align: center;
    color: #34414e;
    background-color:#E0E5EC;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
    border-radius: 10px;
    border-collapse: collapse;
    tr:nth-child(even) {
        background-color: #778899;
        color: white;
        :hover {
            background-color: #8899aa;
        }
    }
`

export const ActionContainer = styled.div`
    grid-column: 3/4;
    grid-row: 3/4;
    display: flex;
    justify-content: center;
    align-items: center;
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
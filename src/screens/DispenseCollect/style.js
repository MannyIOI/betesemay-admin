import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    background-color:#E0E5EC;
`

export const TableContainer = styled.div`
    grid-column: 2/3;
    grid-row: 2/4;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    grid-row: 1/2;
    grid-column: 2/3;
`
export const ActionContainer = styled.div`
    grid-column: 2/3;
    display: flex;
    flex-direction: row-reverse;
    margin: 30px;

`

export const DispenseButton = styled.div`
    background: ${props => props.theme.themeColor2};
    color: white;
    border: 0px;
    border-radius: 5px;
    margin: 5px 0px 25px 0px;
    font-size: 15px;
    width: 20%;
    align-self: center;
    padding: 10px;
    text-align: center;
    transition: 0.5s;
    :disabled {
        background: grey;
    }
    :hover {
        // background: #8f4685;
        cursor: pointer;
    }
`

export const CollectButton = styled.div`
    background: ${props => props.theme.themeColor4};
    color: white;
    border: 0px;
    border-radius: 5px;
    margin: 5px 0px 25px 0px;
    font-size: 15px;
    width: 20%;
    align-self: center;
    padding: 10px;
    text-align: center;
    transition: 0.5s;
    :disabled {
        background: grey;
    }
    :hover {
        // background-color #ff7e00;
        cursor: pointer;
    }
`
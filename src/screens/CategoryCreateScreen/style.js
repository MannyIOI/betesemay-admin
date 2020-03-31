import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 100%;
    height: 100vh;
    background: #E0E5EC;
    align-items: center;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-column: 2/4;
    grid-row: 2/4;
    width: 40%;
    height: 20%;
    justify-self: center;

    background-color:#E0E5EC;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
`

export const Input = styled.input`
    margin: 4px;
    // line-height: 30px;
    padding: 10px;
    border-radius: 5px;
    // border: 1px solid rgb(67, 90, 111);
    &:hover { 
        // border: 1px solid grey;
    }
`

export const SubmitBtn = styled.button`

`
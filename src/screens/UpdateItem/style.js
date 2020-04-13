import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-rows: 1fr 2fr;
    height: 100%;
    background-color:#E0E5EC;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    grid-column: 2/3;
    grid-row: 1/2;
    justify-content: center;
    padding: 30px;
    border-radius: 10px;

    background-color:#E0E5EC;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
`

export const Input = styled.input`
    margin: 4px;
    // line-height: 30px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgb(67, 90, 111);
    &:hover { 
        border: 1px solid grey;
    }
`

export const SubmitBtn = styled.button`

`
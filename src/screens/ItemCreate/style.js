import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 100%;
    background: #E0E5EC;
    height: 100vh;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 30px;
    border-radius: 10px;

    background-color:#E0E5EC;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
`

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    background: #E0E5EC;
`

export const SubmitBtn = styled.button`

`
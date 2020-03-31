import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    background: #EAEAEA;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    width: 100%;
`

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    background: #E0E5EC;
`

export const SubmitBtn = styled.button`
    margin: 8px;
    padding: 12px;
    font-size: 18px;
    color: #555555;
    border-radius: 10px;
    
    :hover {
        background: #4CAF50;
        color: white;
        border-radius: 15px;
    }
    :active {
        color: #555555;
        background: white;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;

    grid-column: 2/3;
    grid-row: 2/3;
`
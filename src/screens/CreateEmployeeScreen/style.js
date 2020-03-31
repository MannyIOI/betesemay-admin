import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    width: 100%;

    background-color:#E0E5EC;
    // box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
`

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #dae4ee;
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
    justify-content: center;
    padding: 20px;

    background-color:#E0E5EC;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5);
`
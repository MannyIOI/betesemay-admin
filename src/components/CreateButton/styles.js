import styled from 'styled-components'
export const CreateButton = styled.button`
    background: ${props=>props.theme.themeColor4};
    color: white;
    border: 0px;
    border-radius: 5px;
    margin: 1px;
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    :disabled {
        background: grey;
    }
    :hover {
        background: #8f4685;
        cursor: pointer;
    }
`
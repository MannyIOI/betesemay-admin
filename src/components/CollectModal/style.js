import styled from "styled-components"

export const CancelButton = styled.button`
    background: #ff2400;
    color: white;
    border: 0px;
    border-radius: 5px;
    margin: 0px 12px 0px 0px;
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    cursor: pointer;
    width: 100px;
    :disabled {
        background: grey;
    }
    // :hover {
    //     background: #f00;
    //     cursor: pointer;
    // }
`

export const CollectButton = styled(CancelButton)`
    background: ${props=>props.theme.themeColor3};
    :hover {
        background: ${props => props.theme.theme3};
    }
`
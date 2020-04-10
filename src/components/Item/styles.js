import styled from "styled-components"

export const Category = styled.div`
    position: absolute;
    top: -30px;
    left: 0;
    height: 30px;
    width: 20%;
    padding: 0 15px;
    background-color: coral;
    border-radius: 0 40px 0 0;
    color: #fff;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 700;
    line-height: 25px;
`

export const Header = styled.div`
    height: 70%;
    overflow: hidden;
    background-color: #000;
    -webkit-transition: height 0.5s;
    transition: height 0.5s;

    img {
        width: 100%;
        display: block;
        opacity: 1;
        overflow: hidden;
        // height: 100%;
        transition: opacity 0.5s, transform 0.5s;
    }
`

export const Body = styled.div`
    z-index: 1;
    position: relative;
    height: 30%;
    padding: 10px;
    -webkit-transition: height 0.5s;
    transition: height 0.5s;
`


export const Actions = styled.div`
    display: none;
    position: absolute;
    top: 10px;
    transition: 1s;
    right: 10px;
    height: 30px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 700;
    line-height: 25px;
`

export const Description = styled.div`
    
`


export const Card = styled.div`
    margin: 30px;
    ${props => props.theme.neumorphic}
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    &:hover ${Header} { 
        height: 35%;
    }

    &:hover img {
        opacity: 0.6;
        -webkit-transform: scale(1.2);
        transform: scale(1.5);
    }

    &:hover ${Body}{
        height: 65%;
    }

    &:hover ${Actions}{
        display: flex;
    }
`

export const UpdateButton = styled.button`
    background: #b87333;
    border: 0px;
    grid-column: 8/10;
    border-radius: 10px 0px 0px 10px;
    cursor: pointer;
    :hover {
        background: #b88933;
    }
    :active {
        background: #b87322;
    }
`

export const DeleteButton = styled.button`
    background: #c04000;
    border: 0px;
    grid-column: 10/12;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;
    :hover {
        background: #E04000;
    }
    :active {
        background: #A04000;
    }
`


export const Text = styled.p`
    color: ${props=>props.theme.themeColor4};
    font-weight: 100;
    font-size: 16px;
`

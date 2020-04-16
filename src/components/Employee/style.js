import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    overflow-y: hidden;
    overflox-x: hidden;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    ${props => props.theme.neumorphic};
    cursor: pointer;
    :hover {
        ${props => props.theme.neumorphicHover};
    }
    border-radius: 10px;
    margin: 10px;
`

export const ImageContainer = styled.div`
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 5%;
    display: grid;
    align-self: center;
    justify-self: center;
    

    img {
        justify-self: center;
        align-self: center;
        display: inline;
        margin: 0 auto;
        margin-left: -25%; //centers the image
        height: 100%;
        width: auto;
        opacity: 1;
        transition: opacity 0.5s, transform 0.5s;
    }
`

export const DetailContainer = styled.div`
    grid-column: 2/3;
    padding: 10px;

`
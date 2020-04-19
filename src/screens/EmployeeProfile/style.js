import styled from 'styled-components'
export const Container = styled.div`
    // width: 22%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`

export const ImageContainer = styled.div`
    grid-column: 1/2;
    grid-row: 1/3;
    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: 15px;
    img {
        border-radius: 15px;
        width: 100%;
        opacity: 1;
        overflow: hidden;
        transition: opacity 0.5s, transform 0.5s;
    }
`

export const InfoContainer = styled.div`
    grid-column: 2/4;
    grid-row: 1/3;
    // background: blue;
    padding: 20px 50px;
`

export const ActivityContainer = styled.div`
    grid-column: 5/6;
    grid-row: 1/4;
    // background: green;
`
export const CreateButton = styled.button`
    background: ${props=>props.theme.themeColor4};
    color: white;
    border: 0px;
    border-radius: 15px;
    margin: 10px 0px;
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    width: 100%;
    :disabled {
        background: grey;
    }
    :hover {
        background: ${props=>props.theme.themeColor2};
        cursor: pointer;
    }
`
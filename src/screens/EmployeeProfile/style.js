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
    background: green;
    overflow-x: hidden;
    overflow-y: hidden;
    border-radius: 15px;
    img {
        // width: 100%;
        height: 100%;
        margin-left: -25%;
        opacity: 1;
        overflow: hidden;
        // height: 100%;
        transition: opacity 0.5s, transform 0.5s;
    }
`

export const InfoContainer = styled.div`
    grid-column: 2/4;
    grid-row: 1/3;
    // background: blue;
`

export const ActivityContainer = styled.div`
    grid-column: 5/6;
    grid-row: 1/4;
    // background: green;
`
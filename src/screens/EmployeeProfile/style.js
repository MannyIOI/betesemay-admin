import styled from 'styled-components'
export const Container = styled.div`
    // width: 22%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

`


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
        transform: scale(1);
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


export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    transition: 1s;
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

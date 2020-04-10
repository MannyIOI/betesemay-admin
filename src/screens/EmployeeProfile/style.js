import styled from 'styled-components'
export const Container = styled.div`
    width: 300px;
    height: 270px;
`


export const Category = styled.div`
    position: absolute;
    top: -30px;
    left: 0;
    height: 30px;
    width: 20%;
    padding: 0 15px;
    background-color: coral;
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
    position: relative;
    height: 30%;
    padding: 10px;
    -webkit-transition: height 0.5s;
    transition: height 0.5s;
    background: red;
`

export const Description = styled.div`
    
`

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
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
`

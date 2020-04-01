import styled from "styled-components";

export const Container = styled.div`
    width: 15%;
    height: 100vh;
    background: ${props => props.theme.backgroundColor};
    // border-radius: 40px;
    // // margin: 10px;
    // padding: 40px;
`

export const NavContainer = styled.div`
    margin: 20px;
    padding: 30px;
    border-radius: 40px;
    background: ${props => props.theme.gradient2}
    height: 88%;
`

export const NavLinks = styled.div`
    .nav-item {
        height: 5%;
        opacity: 0.6;
        color: #FFF;
        text-decoration: none; 
        font-weight: 500;
        width: 100%;
        // text-align: center;
        padding: 12px;
        padding-left: 20px;
        margin: 10px 10px 20px 10px;
        border-radius: 10px;
    }
    .active-nav-item {
        opacity: 1;
        background: #EAEAEA;
        color: #435A6F;
    }
    .white-color {
        opacity: 1;
    }
    .hover-active:hover {
        opacity: 1;
    }

    // background: #435A6F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // height: 95vh;
`

export const CollapseButton = styled.button`
    height: 5vh;
`
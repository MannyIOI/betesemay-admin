import styled from "styled-components";

export const Container = styled.div`
    width: 20%;
    height: 100vh;
`

export const NavLinks = styled.div`
    .nav-item {
        height: 5%;
        opacity: 0.6;
        color: #6f4685;
        text-decoration: none; 
        width: 100%;
        text-align: center;
        padding-top: 24px;
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

    background: #435A6F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 95vh;
`

export const CollapseButton = styled.button`
    height: 5vh;
`
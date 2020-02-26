import styled from "styled-components";

export const Container = styled.div`
    min-width: 200px;
    max-width: 300px;
    height: 100vh;
    display: grid;
`

export const NavLinks = styled.div`
    .nav-item {
        height: 5%;
        opacity: 0.6;
        color: white;
        text-decoration: none;
        background: gray;
        width: 100%;
        text-align: center;
        padding-top: 24px;
    }
    .active-nav-item {
        opacity: 1;
    }
    .white-color {
        opacity: 1;
    }
    .hover-active:hover {
        opacity: 1;
    }

    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
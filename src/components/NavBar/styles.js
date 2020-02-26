import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 100px;
    display: grid;
    align-items: center;
`

export const NavLinks = styled.div`
    .nav-item {
        opacity: 0.6;
        color: white;
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
    justify-content: space-between;
`

export const Inner = styled.div`
    width: 100%;
    max-width: 90%;
`
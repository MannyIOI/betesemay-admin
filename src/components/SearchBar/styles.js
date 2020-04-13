import styled from 'styled-components'

export const Container = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin: 10px;
    padding: 10px;
`

export const SearchInput = styled.input`
    grid-column: 1/2;
    width: 40%;
    padding: 12px 40px;
    // margin: 12px 0;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #dae4ee;
    transition: 0.4s;
    :hover{
        width: 80%;
    }
    :focus{
        width: 80%;
    }
    :active{
        width: 80%;
    }
`

export const AccountContainer = styled.div`

    grid-column: 2/3;
    ${props=>props.theme.gradient2}
    display: grid;
    border-radius: 10px;
    grid-template-columns: 1fr 3fr;

    &:hover img {
        opacity: 0.9;
        -webkit-transform: scale(1.2);
        transform: scale(1.5);
    }
`

export const AccountImage = styled.div`
    width: 55px;
    height: 55px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
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

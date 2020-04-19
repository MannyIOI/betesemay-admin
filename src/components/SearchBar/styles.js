import styled from 'styled-components'
import { Input } from 'antd';

export const Container = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    display: grid;
    grid-template-columns: 4fr 1fr;
    margin: 10px;
    padding: 0px 0px;
`

export const SearchInput = styled(Input)`
    grid-column: 1/2;
    width: 40%;
    padding: 5px 30px;
    margin: 0px 50px;
    box-sizing: border-box;
    border-radius: 5px;
    line-height: 30px;
    font-size: 17px;
    border: 1px solid #dae4ee;
    transition: 0.4s;
    :hover{
        width: 60%;
    }
    :focus{
        width: 60%;
    }
    :active{
        width: 60%;
    }
    .ant-input-prefix {
        align-self: center;
        padding-right: 10px;
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

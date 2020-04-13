import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    padding: 20px;
    transition: 1s;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-rows: 1fr 10fr 1fr;
`

export const ActivityContainer = styled.div`
    grid-column: 3/4;
    grid-row: 2/3;
    border-radius: 30px;
    margin: 10px;
    padding: 20px;
`

export const SearchInput = styled.input`
    grid-column: 1/2;
    width: 40%;
    padding: 12px 40px;
    margin: 12px 0;
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
    grid-column: 3/4;
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


export const ContentContainer = styled.div`
    grid-row: 2/3;
    grid-column: 1/3;
    // background: ${props=>props.theme.themeColor2};
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr 2fr 2fr;
`

export const CreateContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row: 1/2;
    grid-column: 1/3;
`


export const CategoryContainer = styled.div`
    grid-row: 2/3;
    grid-column: 1/3;
    display: grid;
    grid-template-columns: 1fr 25fr 1fr;
    grid-template-rows: 1fr;
    overflow-x: hiden;
    overflow-y: hidden;
    padding: 20px;
`
export const Create = styled.div`
    align-self: center;
    overflow: hidden;
    justify-self: center;
    ${props => props.theme.neumorphic};
    width: 70%;
    cursor: pointer;
    height: 40%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    transition: 1s;
    border-radius: 20px;
    p { 
        align-self: center;
        color: ${props => props.theme.themeColor4}; 
        font-weight: 1000;
        font-size: 20px;
    }
    path {
        color: ${props => props.theme.themeColor4};
    }
    :hover {
        ${props => props.theme.neumorphicConvex}
    }
    :active {
        ${props => props.theme.neumorphicActive}
    }
    
`

export const ArrowContainer = styled.div`
    height: 20%;
    border-radius: 10px;
    align-self: center;
    display: grid;
    cursor: pointer;
    ${props => props.theme.neumorphic};
    color: ${props => props.theme.themeColor4};
    :hover {
        ${props => props.theme.neumorphicConcave};
    }
    :active {
        ${props => props.theme.neumorphicActive};
    }
`
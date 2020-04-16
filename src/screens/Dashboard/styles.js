import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    // background: blue;
    transition: 1s;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 2fr;
`

export const ActivityContainer = styled.div`
    grid-column: 3/4;
    grid-row: 1/3;
    border-radius: 30px;
    margin: 10px;
    padding: 20px;
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


export const CategoryItems = styled.div`
    grid-row: 2/3;
    // grid-column: 1/3;
    display: grid;
    grid-template-columns: 1fr 25fr 1fr;
    overflow-x: hiden;
    // overflow-y: hidden;
    padding: 20px;
`

export const CategoryContainer = styled.div`
    grid-row: 2/3;
    grid-column: 1/3;
    display: grid;
    grid-template-rows: 1fr 3fr;
    overflow-y: hidden;
    // padding: 20px;
    height: 100%;
    h2 {
        color: ${props => props.theme.themeColor4};
    }
`

export const OverdueContainer = styled.div`
    grid-row: 3/4;
    grid-column: 1/3;
    display: grid;
    grid-template-rows: 1fr 3fr;
    // overflow-x: hiden;
    overflow-y: hidden;
    // padding: 20px;
    height: 100%;
`

export const OverdueItems = styled.div`
    grid-row: 2/3;
    // grid-column: 1/3;
    display: grid;
    grid-template-columns: 1fr 25fr 1fr;
    overflow-x: hidden;
    // overflow-y: hidden;
    padding: 20px;
    h2 {
        color: ${props => props.theme.themeColor4};
        // font-size: 25px;
    }
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
    grid-template-columns: 1fr 4fr;
    transition: 1s;
    border-radius: 20px;
    p { 
        align-self: center;
        color: ${props => props.theme.themeColor4}; 
        font-weight: 1000;
        font-size: 20px;
        margin: 0px;
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
    // height: 20%;
    border-radius: 5px;
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

export const Header = styled.div`
    margin-left: 5%;
    display: grid;
    h2 {
        color: ${props => props.theme.themeColor4};
        font-size: 25px;
        align-self: end;
    }
`
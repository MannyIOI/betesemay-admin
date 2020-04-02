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
    background: ${props=>props.theme.themeColor3};
    border-radius: 30px;
    margin: 10px;
    padding: 30px;
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
    border-radius: 10px;
`



export const ContentContainer = styled.div`
    grid-row: 2/3;
    grid-column: 1/3;
    background: ${props=>props.theme.themeColor2};
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr 4fr;
`

export const CreateContainer = styled.div`
    grid-row: 1/2;
    grid-column: 1/3;
    background: ${props=>props.theme.themeColor3}
`

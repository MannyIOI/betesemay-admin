import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 10fr;
`

export const FilterContainer = styled.div`
    grid-row: 1/2;
    background: ${props=>props.theme.themeColor2};
    
    display: grid;
    grid-template-columns: 1fr 1fr 8fr;
`

export const ResultContainer = styled.div`
    grid-row: 2/3;
    background: ${props=>props.theme.themeColor3};
`

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
`

export const CategoriesContainer = styled.div`

`

export const EmployeesContainer = styled.div`

`
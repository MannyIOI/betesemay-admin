import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 20fr;
`

export const FilterContainer = styled.div`
    grid-row: 1/2;
    
    display: grid;
    grid-template-columns: 1fr 1fr 8fr;
    padding: 10px;
`

export const ResultContainer = styled.div`
    grid-row: 2/3;
    height: 100%;
    overflow-y: hidden;
`

export const ItemsContainer = styled.div`
    height: 100%;
    // width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`

export const CategoriesContainer = styled.div`
    height: 100%;
    // width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`

export const EmployeesContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`
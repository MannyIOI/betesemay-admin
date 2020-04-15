import React from 'react'
import { Container, FilterContainer, ResultContainer } from './style'

const Search = ({ match }) => {
    console.log(match.params.search)
    return (
        <Container>
            <FilterContainer>
                Filter
            </FilterContainer>

            <ResultContainer>
                Results
            </ResultContainer>
        </Container>
    )
}

export default Search;
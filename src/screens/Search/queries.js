import gql from 'graphql-tag'

export const SEARCH_ITEMS = gql`
    query search_items($title: String, $page: Int, $limit: Int!){
        searchItems(title: $title, page: $page, limit: $limit){
            results{
                id
                title
                category{
                    id
                    title                    
                }
                description
                state
                imageId
            }
            total
        }
    }
`

export const SEARCH_CATEGORIES = gql`
    query search_categories($title: String, $page: Int, $limit: Int!){
        searchCategories(title: $title, page: $page, limit: $limit){
            results{
                id
                title
            }
            total
        }
    }
`

export const SEARCH_EMPLOYEES = gql`
    query search_employees($q: String, $page: Int, $limit: Int!){
        searchEmployees(q: $q, page: $page, limit: $limit){
            results{
                id
                first_name
                last_name
                email
                role
                created_at
            }
            total
        }
    }
`
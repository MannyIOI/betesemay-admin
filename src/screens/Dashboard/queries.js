import gql from "graphql-tag";

export const GET_ALL_CATEGORIES = gql`
    query get_all_categories($page: Int, $limit: Int!) {
        getAllCategories(page: $page, limit: $limit){
            results{
                id
                title
            }
        total
        }
    }
`

export const GET_All_HISTORY = gql`
    query get_all_history($page: Int!) {
        getAllHistory(page: $page){
            results{
                id
                to{
                    id
                    first_name
                    last_name
                    address
                    email
                    role
                }
                item{
                    title
                }
                type
                created_at
            }
            total
        }
    }
`
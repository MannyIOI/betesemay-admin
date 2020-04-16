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
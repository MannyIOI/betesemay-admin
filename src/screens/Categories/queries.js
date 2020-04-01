import gql from "graphql-tag";

export const GET_ALL_CATEGORIES = gql`
    query get_all_categories($page: Int) {
        getAllCategories(page: $page){
            results{
                id
                title
            }
        total
        }
    }
`
import gql from "graphql-tag";

export const GET_ITEMS_BY_CATEGORY = gql`
    query get_items_by_category ($page: Int, $category: ID!) {
        getItemsByCategory(category: $category, page: $page){
            results{
                id
                title
                description
                category{
                    title
                }
            }
        }
    }
`
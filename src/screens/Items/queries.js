import gql from "graphql-tag";

export const GET_ALL_ITEMS = gql`
    query get_all_items ($page: Int, $limit: Int!) {
        getAllItems(page: $page, limit: $limit){
            results {
                id
                title
                description
                state
                category{
                    id
                    title
                }
                imageId
            }
            total
        }
    }
`
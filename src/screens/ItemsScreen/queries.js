import gql from "graphql-tag";

export const GET_ALL_ITEMS = gql`
    query get_all_items ($page: Int) {
        getAllItems(page: $page){
            results {
                id
                title
                description
                quantity
                in_coffin
            }
            total
        }
    }
`
import gql from "graphql-tag";

export const GET_ALL_ITEMS = gql`
    query get_all_items {
        getAllItems{
            name
            description
            count
        }
    }
`
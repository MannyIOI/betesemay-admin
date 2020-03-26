import gql from "graphql-tag";
export const GET_ITEM_DETAIL = gql`
    query get_item_detail($id: ID!) {
        getItem(id: $id){
            id
            category{
                id
                title
            }
            title
            description
            dispense_period
            state
        }
    }
`

export const GET_ITEM_HISTORY = gql`
    query get_item_history($item: ID!, $page: Int!) {
        getHistoriesByItem(item: $item, page: $page){
            results{
                id
                to{
                    first_name
                    role
                }
            }
        }
    }
`
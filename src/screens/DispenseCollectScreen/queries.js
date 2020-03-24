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

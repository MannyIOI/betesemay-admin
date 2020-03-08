import gql from "graphql-tag";

export const DELETE_ITEM = gql`
    mutation DeleteItem ($id: String) {
    	deleteItem(id: $id)
    }
`
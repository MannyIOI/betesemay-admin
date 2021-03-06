import gql from "graphql-tag";

export const GET_ITEM = gql`
    query get_item($id: ID!){
        getItem(id: $id){
            id
            category {
                id
                title
            }
            title
            description
        }
    }
`

export const UPDATE_ITEM = gql`
    mutation update_item ( $id: ID!, $category: ID,
                            $title: String, $desc: String, 
                            $dispense_period: Int){
        updateItem(data: { id: $id,
                            category: $category,
                            title: $title, 
                            description: $desc,
                            dispense_period: $dispense_period   }){
            
            title
        }
    }
`
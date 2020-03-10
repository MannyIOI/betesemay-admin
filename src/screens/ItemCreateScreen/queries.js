import gql from "graphql-tag";

export const CREATE_ITEM = gql`
    mutation create_item ( $category: ID!,
                            $title: String!, $desc: String!, 
                            $dispense_period: Int!, $quantity: Int!, 
                            $in_coffin: Int!){
        createItem(data: { category: $category
                            title: $title, 
                            description: $desc,
                            dispense_period: $dispense_period,
                            quantity: $quantity,
                            in_coffin: $in_coffin}){
            
            title
        }
    }
`
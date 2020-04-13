import gql from "graphql-tag";

export const CREATE_ITEM = gql`
    mutation create_item ( $category: ID!,
                            $title: String!, $desc: String!, 
                            $dispense_period: Int!, $imageId: String!){
        createItem(data: { category: $category
                            title: $title, 
                            description: $desc,
                            dispense_period: $dispense_period,
                            imageId: $imageId,
                            state: "IN_STOCK"}){
            title
        }
    }
`
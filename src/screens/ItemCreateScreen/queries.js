import gql from "graphql-tag";

export const CREATE_ITEM = gql`
    mutation create_item ($name: String!, $desc: String!){
        createItem(data: { name: $name, description: $desc}){
            description
            name
        }
    }
`
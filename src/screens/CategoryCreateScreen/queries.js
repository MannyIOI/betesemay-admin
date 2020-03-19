import gql from "graphql-tag";

export const CREATE_CATEGORY = gql`
    mutation create_category($title: String!){
        createCategory(data:{ title: $title }){
            id
            title
    }
}
`
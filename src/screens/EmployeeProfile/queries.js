import gql from "graphql-tag";

const GET_EMPLOYEE = gql`
    query get_employee($id: ID!){
        getEmployee(id: $id){
            id
            first_name
            last_name
            email
            phone_number
            role
            imageId
            created_at
        }
    }
`
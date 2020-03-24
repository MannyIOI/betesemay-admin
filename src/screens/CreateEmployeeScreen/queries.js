import gql from "graphql-tag";

export const CREATE_EMPLOYEE = gql`
    mutation createEmployee ($first_name: String!, $last_name: String!,
                            $email: String!, $phone_number: String!, 
                            $role: String!, $address: String
                            ){
        createEmployee(data: { first_name: $first_name, last_name: $last_name, 
                                email: $email, phone_number: $phone_number, 
                                role: $role, address: $address}){
            first_name
            email
            role
        }   
    }
`
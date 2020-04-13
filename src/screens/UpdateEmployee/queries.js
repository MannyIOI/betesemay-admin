import gql from "graphql-tag";

export const GET_EMPLOYEE = gql`
    query get_employee($id: ID!){
        getEmployee(id: $id){
            id
            first_name
            last_name
            email
            address
            phone_number
            role
            imageId
        }
    }
`

export const UPDATE_EMPLOYEE = gql`
    mutation update_employee($id: ID!, 
                            $first_name: String, 
                            $last_name: String,
                            $email: String, 
                            $address: String, 
                            $phone_number: String,
                            $role: String){
        updateEmployee(id: $id,
                        first_name: $first_name,
                        last_name: $lastn_name,
                        email: $email,
                        address: $address,
                        phone_number: $phone_number,
                        role: $role){
            first_name
        }
    }
`
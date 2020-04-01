import gql from "graphql-tag";

export const GET_ALL_EMPLOYEES = gql`
    query get_all_employees($page: Int){
        getAllEmployees(page: $page){
            results{
                id
                first_name
                last_name
                email
                address
                phone_number
                role
            }
            total
        }
    }
`
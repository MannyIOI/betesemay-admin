import gql from "graphql-tag"
export const GET_ALL_EMPLOYEES = gql`
    query get_all_employees{
        getAllEmployees{
            id
            first_name
            last_name
            email
            role
        }
    }
`

// export const DISPENSE_ITEM = gql`

// `
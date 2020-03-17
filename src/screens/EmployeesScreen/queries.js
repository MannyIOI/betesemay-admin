import gql from "graphql-tag";

export const GET_ALL_EMPLOYEES = gql`
    query get_all_employees {
        getAllEmployees{
            results {
                id
                title
                description
            }
            total
        }
    }
`
import gql from "graphql-tag";

export const CREATE_EMPLOYEE = gql`
    mutation createEmployee ($firstName: String!, $lastName: String!,
                            $email: String!, $phoneNumber: String!, 
                            $jobTitle: String!
                            ){
        createEmployee(data: { firstName: $firstName, lastName: $lastName, 
                                email: $email, phoneNumber: $phoneNumber, 
                                jobTitle: $jobTitle}){
            firstName
            email
            jobTitle
        }
    }
`
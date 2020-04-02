import gql from "graphql-tag"
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

export const DISPENSE_COLLECT_ITEM = gql`
    mutation dispense_collect_item($id: ID!, $state: String){
        updateItem(data:{id: $id, state: $state}){
            state
        }
    }
`

export const CREATE_ITEM_HISTORY = gql`
    mutation create_item_history($item: ID!, $to: ID!, 
                                    $type: String!){
                                        
        createHistory(data:{ type: $type
                                item: $item,
                                to: $to }){
            id
            to{
                id
                first_name
                last_name
                address
                email
                role
            }
            type
            created_at
        }
    }
`
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

export const DISPENSE_COLLECT_ITEM = gql`
    mutation dispense_collect_item($id: ID!, $state: String){
        updateItem(data:{id: $id, state: $state}){
            state
        }
    }
`

export const CREATE_ITEM_HISTORY = gql`
    mutation create_item_history($item: ID!, $to: ID!, 
                                    $dispense_date: Date!, $expected_return_date: Date!, 
                                    $return_date: Date){
                                        
        createHistory(data:{ dispense_date: $dispense_date,
                                expected_return_date: $expected_return_date,
                                return_date: $expected_return_date,
                                item: $item,
                                to: $to }){
        dispense_date
        }
    }
`
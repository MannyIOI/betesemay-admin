import gql from "graphql-tag";

export const GET_ITEMS_BY_CATEGORY = gql`
    query get_items_by_category ($page: Int) {
        getItemsByCategory(category: "885626c1-9f72-415e-a3d4-f71a762f68ff", page: $page){
            results{
                id
                title
                category{
                    title
                }
            }
        }
    }
`
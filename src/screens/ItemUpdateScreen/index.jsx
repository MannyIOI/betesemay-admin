import React from 'react'

function UpdateItem(props) {
    const { itemId } = props.match.params;

    return (
        <div>
            Update Employee {itemId}
        </div>
    )
}

export default UpdateItem


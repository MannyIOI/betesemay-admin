import React from 'react'
import PropTypes from 'prop-types'

function UpdateItem(props) {
    const { itemId } = props.match.params;

    return (
        <div>
            Update Employee {itemId}
        </div>
    )
}

UpdateItem.propTypes = {

}

export default UpdateItem


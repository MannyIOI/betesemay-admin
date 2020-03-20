import React, { useState } from 'react'
import { MDBModal, MDBBtn, MDBModalHeader, MDBModalBody, MDBModalFooter } from 'mdbreact'

export default () => {
    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
    }

    return (
        <div>
            <MDBBtn color="primary" onClick={toggle}>Medium modal</MDBBtn>
            <MDBModal isOpen={modal}>
                <MDBModalHeader>MDBModal title</MDBModalHeader>
                <MDBModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                </MDBModalBody>
                <MDBModalFooter>
                <MDBBtn color="secondary">Close</MDBBtn>
                <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </div>
    )
}

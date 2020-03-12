import React from 'react'
import { Container } from "./style";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const Employee = () => {
    return (
        <Container>
            Employee Screen
            <MDBTable bordered hover >
                <MDBTableHead color="blue" textWhite>
                    <tr>
                        <th>head</th>
                        <th>head</th>
                        <th>head</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                    
                </MDBTableBody>
            </MDBTable>
        </Container>
    )
}

export default Employee;
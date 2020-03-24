import React from 'react'
import { Container, TableContainer, ActionContainer } from "./style";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import 'mdbreact/dist/css/style.css';

const Employee = (props) => {
    return (
        <Container>
            Employee Screen
            <TableContainer>
                <MDBTable bordered hover style={{width: "100%"}}>
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
                            <td></td>
                            <td><button>Previous</button><button>Next</button></td>
                            <td></td>
                        </tr>
                        
                    </MDBTableBody>
                </MDBTable>
            </TableContainer>
            <ActionContainer>
                <button onClick={()=>props.history.push({pathname: "/employees/create/"})}>Create Employee</button>
            </ActionContainer>
        </Container>
    )
}

export default Employee;
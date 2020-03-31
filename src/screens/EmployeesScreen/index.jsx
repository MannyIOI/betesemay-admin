import React, { useEffect, useState } from 'react'
import { Container, TableContainer, ActionContainer, PrevButton, NextButton, CreateButton } from "./style";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
// import 'mdbreact/dist/css/mdb.css';
// import 'mdbreact/dist/css/style.css';
import { GET_ALL_EMPLOYEES } from './queries';
import { withApollo } from 'react-apollo';

const Employee = ({client, history, match}) => {
    const [employees, setEmployees] = useState([])
    const [employeeCount, setEmployeeCount] = useState(0)
    const [page, setPage] = useState(0)

    useEffect(() => {
        try {
            client.query({
                query: GET_ALL_EMPLOYEES,
                variables: { page }
            }).then(res=>{
                setEmployees(res.data.getAllEmployees.results)
                setEmployeeCount(res.data.getAllEmployees.total)
            });
            
        } catch (error) {
            console.log(error)
        }
    }, [client, page, setEmployees, match.params.itemId])


    const onNextClicked = async () => {
        setPage(page+1)
    }
    const onPrevClicked = async () => {
        setPage(page-1)
    }

    return (
        <Container>
            <TableContainer>
                <MDBTable bordered hover style={{width: "100%", textAlign: 'center'}}>
                    <MDBTableHead style={{background: "#8f4685", color: "white"}} textWhite>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Role</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {employees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.first_name}</td>
                                <td>{employee.email}</td>
                                <td>{employee.address}</td>
                                <td>{employee.role}</td>
                                {/* <td><button>edit</button></td> */}
                            </tr>
                        ))}
                        <tr>
                            <td></td><td></td><td></td>
                            <td>

                                {page>0 && <PrevButton onClick={onPrevClicked} disabled={page<=0}>Previous</PrevButton>}
                                { (page)*11 + employees.length<employeeCount &&
                                    <NextButton onClick={onNextClicked} disabled={(page)*11 + employees.length>=employeeCount}>
                                        Next
                                    </NextButton>}
                                
                            </td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
            </TableContainer>
            <ActionContainer>
                <CreateButton onClick={()=>history.push({pathname: "/employees/create/"})}>Create Employee</CreateButton>
            </ActionContainer>
        </Container>
    )
}

export default withApollo(Employee);
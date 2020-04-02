import React, { useEffect, useState } from 'react'
import { Container, TableContainer, ActionContainer, PrevButton, NextButton, CreateButton, Table } from "./style";
import { MDBTableBody, MDBTableHead } from "mdbreact";
// import 'mdbreact/dist/css/mdb.css';
// import 'mdbreact/dist/css/style.css';
import { GET_ALL_EMPLOYEES } from './queries';
import { withApollo } from 'react-apollo';
import Loading from '../../components/Loading';

const Employee = ({client, history, match}) => {
    const [employees, setEmployees] = useState([])
    const [employeeCount, setEmployeeCount] = useState(0)
    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        try {
            client.query({
                query: GET_ALL_EMPLOYEES,
                variables: { page }
            }).then(res=>{
                setIsLoading(false)
                setEmployees(res.data.getAllEmployees.results)
                setEmployeeCount(res.data.getAllEmployees.total)
            }).catch(error => {
                console.log(error)
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
                <Table hover>
                    <MDBTableHead style={{background: "#8f4685", color: "white"}} textWhite>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Role</th>
                        </tr>
                    </MDBTableHead>
                    {!isLoading &&
                        <MDBTableBody>
                            {employees.map(employee => (
                                <tr key={employee.id}>
                                    <td>{employee.first_name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.role}</td>
                                </tr>
                            ))}

                            { (page>0 || (page)*11 + employees.length<employeeCount) &&
                                <tr>
                                    <td></td><td></td><td></td>
                                    <td>

                                        <PrevButton onClick={onPrevClicked} disabled={page<=0}>Previous</PrevButton>
                                        <NextButton onClick={onNextClicked} disabled={(page)*11 + employees.length>=employeeCount}>
                                            Next
                                        </NextButton>
                                        
                                    </td>
                                    
                                </tr>
                            }
                        </MDBTableBody>
                    }
                </Table>
                <Loading isLoading={isLoading}/>
            </TableContainer>
            <ActionContainer>
                <CreateButton onClick={()=>history.push({pathname: "/employees/create/"})}>Create Employee</CreateButton>
            </ActionContainer>
        </Container>
    )
}

export default withApollo(Employee);
import React, { useEffect, useState } from 'react'
import { Image } from "cloudinary-react";
import { Container, TableContainer, ActionContainer, PrevButton, NextButton, Table, Profile, Tr, Actions } from "./style";
import { MDBTableBody, MDBTableHead } from "mdbreact";
// import 'mdbreact/dist/css/mdb.css';
// import 'mdbreact/dist/css/style.css';
import { GET_ALL_EMPLOYEES } from './queries';
import { withApollo } from 'react-apollo';
import Loading from '../../components/Loading';
import { UpdateButton, DeleteButton } from '../../components/Item/styles';
import { FaPen, FaDumpster } from 'react-icons/fa';

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
                            <th>Profile</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </MDBTableHead>
                    {!isLoading &&
                        <MDBTableBody>
                            {employees.map(employee => (
                                <Tr key={employee.id}>
                                    <td style={{display: "grid", justifyContent: "center"}}>
                                        <Profile>
                                            <Image 
                                                cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} 
                                                publicId={employee.imageId}/>
                                        </Profile>
                                    </td>
                                    <td>{employee.first_name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.role}</td>
                                    <td>
                                        <Actions>
                                            <UpdateButton style={{height: "25px", width: "30px"}}><FaPen color="white"/></UpdateButton>
                                            <DeleteButton style={{height: "25px", width: "30px"}}><FaDumpster color="white"/></DeleteButton>
                                        </Actions>
                                    </td>
                                </Tr>
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
            </ActionContainer>
        </Container>
    )
}

export default withApollo(Employee);
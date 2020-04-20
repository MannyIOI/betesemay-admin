import React, { useState, useEffect } from 'react'
import { withApollo } from 'react-apollo'
import { Container, Input, FormContainer } from "./style";
import { useInput } from "../../hooks/inputHooks";
import { GET_ALL_EMPLOYEES } from "../Employees/queries";
import CreateButton from '../../components/CreateButton';
import { UPDATE_EMPLOYEE, GET_EMPLOYEE } from './queries';

const CreateEmployee = ({client, history, match}) => {
    const { value: id, bind: bindId } = useInput(match.params.employeeId)
    const { value: first_name, setValue: setFirstName, bind: bindFirstName } = useInput("")
    const { value: last_name, setValue: setLastName, bind: bindLastName } = useInput("")
    const { value: email, setValue: setEmail, bind: bindEmail } = useInput("")
    const { value: phone_number, setValue: setPhoneNumber, bind: bindPhone } = useInput("")
    const { value: role, setValue: setRole, bind: bindRole } = useInput("")
    const { value: address, setValue: setAddress, bind: bindAddress } = useInput("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()))
        return re.test(String(email).toLowerCase());
    }

    const validate = () => {
        let val = false;
        if (!validateEmail(email)) { setError("* Email is not valid")}
       else { val = true }
        return val
    }

    const handleSubmit = async () => {
        if( validate() ){ UpdateEmployee() }
    }

    const UpdateEmployee = async () => {
        setIsLoading(true)
        await client.mutate({
            mutation: UPDATE_EMPLOYEE,
            variables: { 
                    id,
                    first_name, 
                    last_name, 
                    email, 
                    phone_number, 
                    role,
                    address
                },
                refetchQueries: [{ query: GET_ALL_EMPLOYEES, variables: { page: 0 } }],
                awaitRefetchQueries: true
        }).then(_ => {
            setError("")
            history.push({pathname: "/employees/"})
        }).catch(error => {
            setError(error.message.slice(15, error.message.length))
            setIsLoading(false)
        })
    }

    useEffect(() => {
        client.query({
            query: GET_EMPLOYEE,
            variables: { id }
        }).then(res => {
            let employee = res.data.getEmployee
            setEmail(employee.email)
            setPhoneNumber(employee.phone_number)
            setFirstName(employee.first_name)
            setLastName(employee.last_name)
            setRole(employee.role)
            setAddress(employee.address)
        }).catch(error => {
            console.log(error)
        })
    }, [match.params.id, client, id, setAddress, setEmail, setFirstName, setLastName, setPhoneNumber, setRole])

    return (
        <Container>
            <FormContainer title="Update Employee">
                <h2 style={{color: "#1F88A7", fontWeight: "700", textAlign: "center"}}>Update Employee</h2>
                <Input disabled {...bindId}/>
                <Input placeholder="Email" {...bindEmail} />
                <Input placeholder="Phone Number" {...bindPhone} type="number"/>
                <Input placeholder="First Name" {...bindFirstName} />
                <Input placeholder="Last Name" {...bindLastName} />
                <Input placeholder="Role" {...bindRole} />
                <Input placeholder="Address" {...bindAddress} />
                <p style={{color: "red"}}>{error}</p>
                <CreateButton onClickHandler={handleSubmit} title="Update Employee" isLoading={isLoading} />
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateEmployee);
import React from 'react'
import { withApollo } from 'react-apollo'
import { Container, Input, SubmitBtn, FormContainer } from "./style";
import { useInput } from "../../hooks/inputHooks";
import { CREATE_EMPLOYEE } from "./queries";

const CreateEmployee = ({client, history}) => {
    const { value: first_name, bind: bindFirstName } = useInput("")
    const { value: last_name, bind: bindLastName } = useInput("")
    const { value: email, bind: bindEmail } = useInput("")
    const { value: phone_number, bind: bindPhone } = useInput("")
    const { value: role, bind: bindRole } = useInput("")
    const { value: address, bind: bindAddress } = useInput("") 

    const handleSubmit = async () => {
        try {
            const {data} = await client.mutate({
                mutation: CREATE_EMPLOYEE,
                variables: { 
                    first_name, 
                    last_name, 
                    email, 
                    phone_number, 
                    role,
                    address
                 }
            });
            console.log(data)
            console.log(history)
            history.push({pathname: "/employees/"})
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            Create Employee Screen
            <FormContainer>
                <Input placeholder="Email" {...bindEmail} />
                <Input placeholder="Phone Number" {...bindPhone} style={{width: "91%"}}type="number"/>
                <Input placeholder="First Name" {...bindFirstName} />
                <Input placeholder="Last Name" {...bindLastName} />
                <Input placeholder="Role" {...bindRole} />
                <Input placeholder="Address" {...bindAddress} />
                <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateEmployee);
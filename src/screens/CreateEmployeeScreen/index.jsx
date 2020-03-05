import React from 'react'
import { withApollo } from 'react-apollo'
import { Container, Input, SubmitBtn } from "./style";
import { useInput } from "../../hooks/inputHooks";
import { CREATE_EMPLOYEE } from "./queries";

const CreateEmployee = ({client}) => {
    const { value: firstName, bind: bindFirstName } = useInput("")
    const { value: lastName, bind: bindLastName } = useInput("")
    const { value: email, bind: bindEmail } = useInput("")
    const { value: phoneNumber, bind: bindPhone } = useInput("")
    const { value: jobTitle, bind: bindJobTitle } = useInput("")

    const handleSubmit = async () => {
        try {
            const {data} = await client.mutate({
                mutation: CREATE_EMPLOYEE,
                variables: { 
                    firstName, 
                    lastName, 
                    email, 
                    phoneNumber, 
                    jobTitle
                 }
            });
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            Create Employee Screen
            <Input placeholder="Email" {...bindEmail} />
            <Input placeholder="Phone Number" {...bindPhone} type="number"/>
            <Input placeholder="First Name" {...bindFirstName} />
            <Input placeholder="Last Name" {...bindLastName} />
            <Input placeholder="Job Title" {...bindJobTitle} />
            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        </Container>
    )
}

export default withApollo(CreateEmployee);
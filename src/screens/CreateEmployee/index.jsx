import React, { useState } from 'react'
import { withApollo } from 'react-apollo'
import { Container, Input, FormContainer } from "./style";
import { useInput } from "../../hooks/inputHooks";
import { CREATE_EMPLOYEE } from "./queries";
import { CreateButton } from '../EmployeesScreen/style';
import { BeatLoader } from 'react-spinners';

const CreateEmployee = ({client, history}) => {
    const { value: first_name, bind: bindFirstName } = useInput("")
    const { value: last_name, bind: bindLastName } = useInput("")
    const { value: email, bind: bindEmail } = useInput("")
    const { value: phone_number, bind: bindPhone } = useInput("")
    const { value: role, bind: bindRole } = useInput("")
    const { value: address, bind: bindAddress } = useInput("") 
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async () => {
        try {
            setIsLoading(true)
            await client.mutate({
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
            history.push({pathname: "/employees/"})
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <FormContainer title="Create Employee" >
                <h2 style={{color: "#6f4685", fontWeight: "700", textAlign: "center"}}>Create Employee</h2>
                <Input placeholder="Email" {...bindEmail} />
                <Input placeholder="Phone Number" {...bindPhone} type="number"/>
                <Input placeholder="First Name" {...bindFirstName} />
                <Input placeholder="Last Name" {...bindLastName} />
                <Input placeholder="Role" {...bindRole} />
                <Input placeholder="Address" {...bindAddress} />
                <CreateButton onClick={handleSubmit} disabled ={isLoading} style={isLoading?
                                                                {border: '3px solid #6f4685', 
                                                                    background: "#E0E5EC", 
                                                                    width: '40%'}:
                                                                {border: '0px'}}>

                    {!isLoading ? 'Create Category' : <BeatLoader color={"#0073cf"} loading={isLoading}/>}
                </CreateButton>
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateEmployee);
import React from 'react'
import { Container, Input, SubmitBtn } from "./style";

const CreateEmployee = () => {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [jobTitle, setJobTitle] = useState("")

    

    return (
        <Container>
            Create Employee Screen
            {/* "phoneNumber", "firstName", "lastName", "jobTitle" */}
            <Input placeholder="Email"/>
            <Input placeholder="Phone Number" />
            <Input placeholder="Last Name" />
            <Input placeholder="Job Title" />
            <SubmitBtn>Submit</SubmitBtn>
        </Container>
    )
}

export default CreateEmployee;
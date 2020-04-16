import React, { useState } from 'react'
import { withApollo } from 'react-apollo'
import { Container, Input, FormContainer } from "./style";
import { useInput } from "../../hooks/inputHooks";
import { CREATE_EMPLOYEE } from "./queries";
import { GET_ALL_EMPLOYEES } from "../Employees/queries";
import CreateButton from '../../components/CreateButton'
import axios from "axios"

const CreateEmployee = ({client, history}) => {
    const { value: first_name, bind: bindFirstName } = useInput("")
    const { value: last_name, bind: bindLastName } = useInput("")
    const { value: email, bind: bindEmail } = useInput("")
    const { value: phone_number, bind: bindPhone } = useInput("")
    const { value: role, bind: bindRole } = useInput("")
    const { value: address, bind: bindAddress } = useInput("") 
    let imageId = ""
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [file, setFile] = useState("")

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(String(email).toLowerCase()))
        return re.test(String(email).toLowerCase());
    }

    const validate = () => {
        let val = false;
        if(email === "") { setError("* Email is required") }
        else if (!validateEmail(email)) { setError("* Email is not valid")}
        else if(first_name === "") { setError("* First name is required") }
        else if (last_name === "") { setError("* Last name is required") }
        else if (phone_number === "") { setError("* Phone number is required") }
        else if (phone_number.length !== 10) { setError("* Please put in the right phone number. Example 0912345678") }
        else if (address==="") { setError("Invalid address") }
        else if (file === "") { setError("Please input employee profile image") }
        else { val = true }
        return val
    }

    const handleSubmit = async () => {
        if( validate() ){ CreateEmployee() }
    }

    const CreateEmployee = async () => {
        if(imageId === ""){
            const formdata = new FormData()
            formdata.append('file', file)
            formdata.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET)
            setIsLoading(true)
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formdata
            );
            imageId = response.data.public_id;
        }

        setIsLoading(true)
        await client.mutate({
            mutation: CREATE_EMPLOYEE,
            variables: { 
                    first_name, 
                    last_name, 
                    email, 
                    phone_number, 
                    role,
                    address,
                    imageId
                },
                refetchQueries: [{ query: GET_ALL_EMPLOYEES, page: 0 }],
                awaitRefetchQuery: true
        }).then(_ => {
            setError("")
            history.push({pathname: "/employees/"})
        }).catch(error => {
            setError(error.message.slice(15, error.message.length))
            setIsLoading(false)
        })
    }

    return (
        <Container>
            <FormContainer title="Create Employee">
                <h2 style={{color: "#1F88A7", fontWeight: "700", textAlign: "center"}}>Create Employee</h2>
                <Input placeholder="Email" {...bindEmail} />
                <Input placeholder="Phone Number" {...bindPhone} type="number"/>
                <Input placeholder="First Name" {...bindFirstName} />
                <Input placeholder="Last Name" {...bindLastName} />
                <Input placeholder="Role" {...bindRole} />
                <Input placeholder="Address" {...bindAddress} />
                <Input type="file" onChange={(e) => setFile(e.target.files[0])}/>
                <p style={{color: "red"}}>{error}</p>
                <CreateButton onClickHandler={handleSubmit} title="Create Employee" isLoading={isLoading} />
            </FormContainer>
        </Container>
    )
}

export default withApollo(CreateEmployee);
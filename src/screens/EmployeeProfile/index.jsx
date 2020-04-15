import React, { useState, useEffect } from 'react'
import { withApollo } from 'react-apollo'
import Timeline from 'react-time-line'
import { Image } from 'cloudinary-react'
import { Container, ActivityContainer, ImageContainer, InfoContainer } from './style'
import { GET_All_HISTORY } from '../Dashboard/queries'
import { GET_EMPLOYEE } from './queries'


const EmployeeProfile = ({ client, match }) => {
    const [events, setEvents] = useState([])
    const [employee, setEmployee] = useState({})

    useEffect(() =>{
        client.query({
            query: GET_EMPLOYEE,
            variables: { id: match.params.employeeId }
        }).then(res => {
            setEmployee(res.data.getEmployee)
        }).catch(error => {
            console.log(error)
        })

        client.query({
            query: GET_All_HISTORY,
            variables: { page: 0 },
        }).then(res => {
            let events = []
            res.data.getAllHistory.results.forEach((element)=>{
                let text = ""  
                if(element.type === "COLLECTED"){ 
                    text = element.item.title + " collected from " 
                } else { 
                    text = element.item.title + " dispensed to " 
                }
                text = text + element.to.first_name
                let date = new Date(parseInt(element.created_at)).toISOString()
                events.push({ts: date, text: text })
            })
            setEvents(events)
        }).catch(error => {
            console.log(error)
        })
        
     }, [client, match.params.employeeId]);

    return (
        <Container>
            <ImageContainer>
                <Image 
                    cloudName={process.env.REACT_APP_CLOUDINARY_CLOUD_NAME} 
                    publicId={employee.imageId}/>
            </ImageContainer>
            <InfoContainer>
                <p>{employee.id}</p>
                <p>{employee.first_name}</p>
                <p>{employee.last_name}</p>
                <p>{employee.email}</p>
                <p>{employee.phone_number}</p>
                <p>{employee.role}</p>
                <p>{employee.created_at}</p>
            </InfoContainer>
            <ActivityContainer>
                <Timeline items={events} />
            </ActivityContainer>
            

        </Container>
    )
}

export default withApollo(EmployeeProfile)
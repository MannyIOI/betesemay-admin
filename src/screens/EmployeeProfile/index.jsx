import React, { useState, useEffect } from 'react'
import { withApollo } from 'react-apollo'
import { Container, ActivityContainer, ImageContainer, InfoContainer } from './style'
import Timeline from 'react-time-line'
import { GET_All_HISTORY } from '../Dashboard/queries'


const EmployeeProfile = ({ client }) => {
    const [events, setEvents] = useState([])

    useEffect(() =>{

        client.query({
            query: GET_All_HISTORY,
            variables: { page: 0 },
        }).then(res => {
            let events = []
            res.data.getAllHistory.results.forEach((element)=>{
                let text = ""  
                if(element.type === "COLLECTED"){ text = element.item.title + " collected from " }
                else { text = element.item.title + " dispensed to " }
                text += element.to.first_name
                let date = new Date(parseInt(element.created_at)).toISOString()
                events.push({ts: date, text: text })
            })
            setEvents(events)
        }).catch(error => {
            console.log(error)
        })
        
     }, [client]);

    return (
        <Container>
            <ImageContainer>
                
            </ImageContainer>
            <InfoContainer />
            <ActivityContainer>
                <Timeline items={events} />
            </ActivityContainer>
            

        </Container>
    )
}

export default withApollo(EmployeeProfile)
import React, { useState, useEffect } from 'react'
import Modal from "react-modal"
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { withApollo } from 'react-apollo';
import { GET_ALL_EMPLOYEES, DISPENSE_COLLECT_ITEM, CREATE_ITEM_HISTORY } from './queries';
import { DispenseButton } from '../../screens/DispenseCollect/style';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      width                 : '50%',
      height                : '50%',
    //   marginRight           : '-50%',
      padding               : '5%',
      transform             : 'translate(-50%, -50%)',
      backdrop              : 'black'
    }
  };

const DispenseModal = ({ client, isOpen, closeModal, item }) => {
    const [dispenseDate, setDispenseDate] = useState(new Date())
    const [expectedReturnDate, setExpectedReturnDate] = useState("")
    const [employee, setEmployee] = useState("")
    const [modalError, setModalError] = useState("");
    const [employees, setEmployees] = useState([])

    Modal.setAppElement('body')

    function validate(){
        let retVal = false;
        if (employee === "" || employee === null) {
            setModalError("* Employee is not selected")
        }
        else if(dispenseDate === "" || dispenseDate === null){
            setModalError("* Dispense Date not set")
        }
        else if (expectedReturnDate === "" || expectedReturnDate === "") {
            setModalError("* Expected Return date not set")
        }
        else if(expectedReturnDate < dispenseDate) {
            setModalError("* Expected return date can not be before Dispense date")
        }
        else { 
            setModalError("")
            retVal = true 
        }
        return retVal;
    }

    const dispense = async () => {
        if(validate() && await Dispense()){
            closeModal()
            window.location.reload(false); 
        }
        else if(validate()){
            setModalError("There was an error from the server")
        }
    }

    useEffect(() => { 
        try {
            client.query({
                query: GET_ALL_EMPLOYEES,
                variables: { page: 0 }
            }).then(res => {
                let employees = []
                res.data.getAllEmployees.results.forEach(employee => {
                    employees.push({label: employee.first_name + " " + employee.last_name + " from " + employee.role,
                                             value: employee.id})
                });
                setEmployees(employees)
            })
        } catch (error) {
            console.log(error)
        }
     }, [client, setEmployees]);
    
    
    const Dispense = async () => {
        try {
            await client.mutate({
                mutation: DISPENSE_COLLECT_ITEM,
                variables: { id: item.id, state: "DISPENSED" }
            })

            await client.mutate({
                mutation: CREATE_ITEM_HISTORY,
                variables: { 
                    item: item.id, 
                    to: employee,
                    type: "DISPENSED"
                }
            })

            return true
            
        } catch (error) {
            return error
        }
    }

    return (
        <div >
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                
                >
                    <Select placeholder="Employees" options={employees} onChange={({value})=>setEmployee(value)}/>

                    <DatePicker placeholderText="Dispense date" 
                                selected={dispenseDate} 
                                onChange={date=>setDispenseDate(date)}
                                style={{width: "100%"}}/>

                    <DatePicker placeholderText="Expected Return date" 
                                selected={expectedReturnDate} 
                                onChange={date=>setExpectedReturnDate(date)}
                                style={{width: "100%"}}/>

                    <p style={{color:"red"}}>{modalError}</p>
                    <DispenseButton onClick={dispense}>Dispense</DispenseButton>
            </Modal>
        </div>
    )
}

export default withApollo(DispenseModal);
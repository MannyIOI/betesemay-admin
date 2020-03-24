import React, { useState, useEffect } from 'react'
import Modal from "react-modal"
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { withApollo } from 'react-apollo';
import { GET_ALL_EMPLOYEES } from './queries';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      width                 : '50%',
      height                : '30%',
    //   marginRight           : '-50%',
      padding               : '5%',
      transform             : 'translate(-50%, -50%)',
      backdrop              : 'grey'
    }
  };

const DispenseModal = ({ client, isOpen, closeModal }) => {
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

    function dispense() {
        if(validate()){
            console.log(dispenseDate)

            
            closeModal()
        }
    }

    useEffect(() => { 
        try {
            client.query({
                query: GET_ALL_EMPLOYEES
            }).then(res => {
                let employees = []
                res.data.getAllEmployees.forEach(employee => {
                    employees.push({label: employee.first_name + " " + employee.last_name + " from " + employee.role,
                                             value: employee.id})
                });
                setEmployees(employees)
            })
        } catch (error) {
            console.log(error)
        }
     }, [client, setEmployees]);
    

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
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
                    <button onClick={dispense}>Dispense</button>
            </Modal>
        </div>
    )
}

export default withApollo(DispenseModal);
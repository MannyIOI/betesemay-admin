import React, { useState, useEffect } from 'react'
import Modal from "react-modal"
import Select from 'react-select';
import { DateInput } from './style';
import "react-datepicker/dist/react-datepicker.css";
import { withApollo } from 'react-apollo';
import { GET_ALL_EMPLOYEES, DISPENSE_COLLECT_ITEM, CREATE_ITEM_HISTORY } from './queries';
import { DispenseButton } from '../../screens/DispenseCollect/style';
import { GET_All_HISTORY } from '../../screens/Dashboard/queries';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      width                 : '50%',
      height                : '50%',
      padding               : '4%',
      transform             : 'translate(-50%, -50%)',
      backdrop              : 'black',
      borderRadius          : "30px",
      display               : "grid",
    }
  };

const DispenseModal = ({ client, isOpen, closeModal, item, addHistory, changeItemState }) => {
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
            // window.location.reload(false); 
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
                variables: { id: item.id, state: "DISPENSED" },
                refetchQueries: { query: GET_All_HISTORY, variables: { page: 0 } },
                awaitRefetchQuery: true
            })

            const { data } = await client.mutate({
                mutation: CREATE_ITEM_HISTORY,
                variables: { 
                    item: item.id, 
                    to: employee,
                    type: "DISPENSED"
                }
            })
            await changeItemState("DISPENSED")
            await addHistory(data.createHistory)
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
                    <Select placeholder="Select Employee" options={employees} onChange={({value})=>setEmployee(value)}/>

                    <DateInput placeholderText="Dispense date" 
                                selected={dispenseDate} 
                                onChange={date=>setDispenseDate(date)}
                                css={{background: "black"}}/>

                    <DateInput placeholderText="Expected Return date" 
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
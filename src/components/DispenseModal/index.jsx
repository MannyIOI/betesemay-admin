import React, { useState } from 'react'
import Modal from "react-modal"
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

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

export default (props) => {
    const [dispenseDate, setDispenseDate] = useState(Date.now())
    const [expectedReturnDate, setExpectedReturnDate] = useState("")
    const [employee, setEmployee] = useState("")
    const [modalError, setModalError] = useState("");
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
            retVal = true }
        return retVal;
    }

    function dispense() {
        if(validate()){
            console.log("validated data")
        }
    }

    

    let employees = [{label: "employee-1", value: "id"}]
    return (
        <div>
            {/* <button onClick={openModal}>Dispense Item</button> */}
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                    <Select placeholder="Employees" options={employees} onChange={({value})=>setEmployee(value)}/>

                    <DatePicker placeholderText="Dispense date" 
                                selected={dispenseDate} 
                                onChange={date=>setDispenseDate(date.getTime())}
                                style={{width: "100%"}}/>

                    <DatePicker placeholderText="Expected Return date" 
                                selected={expectedReturnDate} 
                                onChange={date=>setExpectedReturnDate(date.getTime())}
                                style={{width: "100%"}}/>

                    <p style={{color:"red"}}>{modalError}</p>
                    <button onClick={dispense}>Dispense</button>
            </Modal>
        </div>
    )
}

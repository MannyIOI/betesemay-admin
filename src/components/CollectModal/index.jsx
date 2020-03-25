import React from 'react'
import Modal from "react-modal"
import "react-datepicker/dist/react-datepicker.css";
import { withApollo } from 'react-apollo';
import { DISPENSE_COLLECT_ITEM, CREATE_ITEM_HISTORY } from '../DispenseModal/queries';

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

const CollectModal = ({ client, isOpen, closeModal, item }) => {
    // const [dispenseDate, setDispenseDate] = useState(new Date())
    // const [expectedReturnDate, setExpectedReturnDate] = useState("")
    // const [employee, setEmployee] = useState("")
    // const [modalError, setModalError] = useState("");
    // const [employees, setEmployees] = useState([])

    Modal.setAppElement('body')

    // function validate(){
    //     let retVal = false;
    //     if (employee === "" || employee === null) {
    //         setModalError("* Employee is not selected")
    //     }
    //     else if(dispenseDate === "" || dispenseDate === null){
    //         setModalError("* Dispense Date not set")
    //     }
    //     else if (expectedReturnDate === "" || expectedReturnDate === "") {
    //         setModalError("* Expected Return date not set")
    //     }
    //     else if(expectedReturnDate < dispenseDate) {
    //         setModalError("* Expected return date can not be before Dispense date")
    //     }
    //     else { 
    //         setModalError("")
    //         retVal = true 
    //     }
    //     return retVal;
    // }

    const collect = async () => {
        // if(validate()){
            let retVal = await Collect()
            if(retVal) { closeModal(); window.location.reload(false); }
        // }
    }

    // useEffect(() => { 
    //     try {
    //         client.query({
    //             query: GET_ALL_EMPLOYEES
    //         }).then(res => {
    //             let employees = []
    //             res.data.getAllEmployees.forEach(employee => {
    //                 employees.push({label: employee.first_name + " " + employee.last_name + " from " + employee.role,
    //                                          value: employee.id})
    //             });
    //             setEmployees(employees)
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    //  }, [client, setEmployees]);
    
    
    const Collect = async () => {
        try {
            await client.mutate({
                mutation: DISPENSE_COLLECT_ITEM,
                variables: { id: item.id, state: "IN_STOCK" }
            })

            await client.mutate({
                mutation: CREATE_ITEM_HISTORY,
                variables: { 
                    item: item.id, 
                    to: "ab2d4b5f-cc6c-4b37-b31f-95abb68b1599",
                    dispense_date: new Date().toISOString(),
                    expected_return_date: new Date().toISOString(),
                    return_date: new Date().toISOString()
                }
            })

            return true
            
        } catch (error) {
            return error
        }
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                    {/* <Select placeholder="Employees" options={employees} onChange={({value})=>setEmployee(value)}/>

                    <DatePicker placeholderText="Dispense date" 
                                selected={dispenseDate} 
                                onChange={date=>setDispenseDate(date)}
                                style={{width: "100%"}}/>

                    <DatePicker placeholderText="Expected Return date" 
                                selected={expectedReturnDate} 
                                onChange={date=>setExpectedReturnDate(date)}
                                style={{width: "100%"}}/> */}
                    <p>Are you sure you want to collect this item from `EMPLOYEE`</p>
                    
                    {/* <p style={{color:"red"}}>{modalError}</p> */}
                    <button onClick={collect}>Collect</button>
                    <button onClick={closeModal}>Cancel</button>
            </Modal>
        </div>
    )
}

export default withApollo(CollectModal);
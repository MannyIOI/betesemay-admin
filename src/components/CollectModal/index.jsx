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
      padding               : '5%',
      transform             : 'translate(-50%, -50%)',
      backdrop              : 'grey'
    }
  };

const CollectModal = ({ client, isOpen, closeModal, item, histories }) => {

    Modal.setAppElement('body')

    const collect = async () => {
            let retVal = await Collect()
            if(retVal) { closeModal(); window.location.reload(false); }
    }
    
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
                    to: histories[0].to.id,
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
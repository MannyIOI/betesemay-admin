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

const CollectModal = ({ client, isOpen, closeModal, item, histories, name }) => {

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
                    type: "COLLECTED"
                }
            })

            return true
            
        } catch (error) {
            return error
        }
    }
    return (
        <div style={{transition: "1s"}}>
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
                    <p>Are you sure you want to collect this item from {histories.length > 0 && histories[0].to.first_name + " " + histories[0].to.last_name}</p>
                    
                    {/* <p style={{color:"red"}}>{modalError}</p> */}
                    <button onClick={collect}>Collect</button>
                    <button onClick={closeModal}>Cancel</button>
            </Modal>
        </div>
    )
}

export default withApollo(CollectModal);
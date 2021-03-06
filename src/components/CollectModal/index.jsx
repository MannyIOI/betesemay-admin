import React from 'react'
import Modal from "react-modal"
import "react-datepicker/dist/react-datepicker.css";
import { withApollo } from 'react-apollo';
import { DISPENSE_COLLECT_ITEM, CREATE_ITEM_HISTORY } from '../DispenseModal/queries';
import { GET_All_HISTORY } from '../../screens/Dashboard/queries';
import { CancelButton, CollectButton } from './style';
import { GET_ITEM_DETAIL } from '../../screens/DispenseCollect/queries'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '60%',
      right                 : 'auto',
      bottom                : 'auto',
      width                 : '30%',
      height                : '30%',
      padding               : '5%',
      transform             : 'translate(-50%, -50%)',
      backdrop              : 'grey',
      borderRadius          : '15px'
    }
  };

const CollectModal = ({ client, isOpen, closeModal, item, histories, addHistory, changeItemState }) => {

    Modal.setAppElement('body')

    const collect = async () => {
            let retVal = await Collect()
            if(retVal) { closeModal(); }
    }
    
    const Collect = async () => {
        try {
            await client.mutate({
                mutation: DISPENSE_COLLECT_ITEM,
                variables: { id: item.id, state: "IN_STOCK" },
                refetchQueries: [{ query: GET_ITEM_DETAIL, variables: {id: item.id}}]
            })

            const {data} = await client.mutate({
                mutation: CREATE_ITEM_HISTORY,
                variables: { 
                    item: item.id, 
                    to: histories[0].to.id,
                    type: "COLLECTED"
                },
                refetchQueries: [{ query: GET_All_HISTORY, variables: { page: 0 } }],
                awaitRefetchQueries: true
            })
                
            await changeItemState("IN_STOCK")
            await addHistory(data.createHistory)

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
                    <CollectButton onClick={collect}>Collect</CollectButton>
                    <CancelButton onClick={closeModal}>Cancel</CancelButton>
            </Modal>
        </div>
    )
}

export default withApollo(CollectModal);
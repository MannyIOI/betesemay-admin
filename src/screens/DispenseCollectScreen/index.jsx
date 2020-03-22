import React, { useState} from 'react'
import { Container } from "./style";
import { MDBTable } from 'mdbreact';
import DispenseModal from '../../components/DispenseModal'

const DispenseCollect = ({ client, history }) => {
    const [dispenseModalIsOpen,setDispenseModalIsOpen] = useState(false);
    function openDispenseModal() {
        setDispenseModalIsOpen(true);
    }
    function closeDispenseModal(){
        setDispenseModalIsOpen(false);
    }
    // const DispenseCollect = "";
    
    // const GetItemHistory = "";

    // const GetItemDetail = "";

    return (
        <Container>
            Dispense Collect Screen
            
            <p>Item Detail</p>
            
            <button onClick={openDispenseModal}>Dispense Item</button>
            <button>Collect Item</button>

            <DispenseModal isOpen={dispenseModalIsOpen} closeModal = {closeDispenseModal}/>

            <p>Item History</p>
            <MDBTable>

            </MDBTable>
        </Container>
    )
}

export default DispenseCollect;
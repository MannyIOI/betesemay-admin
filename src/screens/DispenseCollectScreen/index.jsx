import React from 'react'
import { Container } from "./style";
import { MDBTable } from 'mdbreact';
import DispenseCollectModal from '../../components/DispenseCollectModal'

const DispenseCollect = ({ client, history }) => {

    // const DispenseCollect = "";
    
    // const GetItemHistory = "";

    // const GetItemDetail = "";

    return (
        <Container>
            Dispense Collect Screen
            
            <p>Item Detail</p>
            
            <button>Dispense Item</button>
            <button>Collect Item</button>

            <DispenseCollectModal/>

            <p>Item History</p>
            <MDBTable>

            </MDBTable>
        </Container>
    )
}

export default DispenseCollect;
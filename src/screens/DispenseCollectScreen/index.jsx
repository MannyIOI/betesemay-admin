import React, { useState, useEffect} from 'react'
import { Container } from "./style";
import { MDBTable } from 'mdbreact';
import { withApollo } from "react-apollo";

import DispenseModal from '../../components/DispenseModal'
import { GET_ITEM_DETAIL } from './queries';
import CollectModal from '../../components/CollectModal';



const DispenseCollect = ({ client, history, match }) => {
    const [dispenseModalIsOpen,setDispenseModalIsOpen] = useState(false);
    const [collectModalIsOpen, setCollectModalIsOpen] = useState(false);

    const [item, setItem] = useState({})
    function openDispenseModal() {
        setDispenseModalIsOpen(true);
    }
    function closeDispenseModal(){
        setDispenseModalIsOpen(false);
    }

    function openCollectModal() {
        setCollectModalIsOpen(true)
    }
    function closeCollectModal() {
        setCollectModalIsOpen(false)
    }
    // const DispenseCollect = "";
    
    // const GetItemHistory = "";

    // console.log(match.params.itemId)
    // const GetItemDetail = async () => {
    //     try {
    //         const { data } = await client.query({
    //             query: GET_ITEM_DETAIL,
    //             variables: { id: match.params.itemId }
    //         });
    //         setItem(data.getItem)
            
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };

    useEffect(() => {
        try {
            client.query({
                query: GET_ITEM_DETAIL,
                variables: { id: match.params.itemId }
            }).then(res=>{
                setItem(res.data.getItem)
            });
            
        } catch (error) {
            console.log(error)
        }
    }, [client, setItem, match.params.itemId])

    return (
        <Container>
            Dispense Collect Screen
            
            <p>Item Detail</p>
            
            {item.state==="IN_STOCK" && <button onClick={openDispenseModal}>Dispense Item</button>}
            {item.state==="DISPENSED" && <button onClick={openCollectModal}>Collect Item</button>}

            <p>Item Id - {item.id}</p>
            <p>Description - {item.descritpion}</p>
            <p>State - {item.state}</p>
            <p>Dispense Period - {item.dispense_period}</p>
            <DispenseModal isOpen={dispenseModalIsOpen} closeModal = {closeDispenseModal} item={item}/>
            <CollectModal isOpen={collectModalIsOpen} closeModal = {closeCollectModal} item={item}/>
            <p>Item History</p>

            <MDBTable>

            </MDBTable>
        </Container>
    )
}

export default withApollo(DispenseCollect);
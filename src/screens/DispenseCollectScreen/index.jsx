import React, { useState, useEffect} from 'react'
import { Container } from "./style";
import { MDBTable } from 'mdbreact';
import { withApollo } from "react-apollo";

import DispenseModal from '../../components/DispenseModal'
import { GET_ITEM_DETAIL, GET_ITEM_HISTORY } from './queries';
import CollectModal from '../../components/CollectModal';



const DispenseCollect = ({ client, history, match }) => {
    const [dispenseModalIsOpen,setDispenseModalIsOpen] = useState(false);
    const [collectModalIsOpen, setCollectModalIsOpen] = useState(false);
    const [histories, setHistories] = useState([])
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
                if(item.id != null){
                    client.query({
                        query: GET_ITEM_HISTORY,
                        variables: { item: item.id, page: 0 }
                    }).then(res => {
                        setHistories(res.data.getHistoriesByItem.results)
                    })
                }
            });       
            
        } catch (error) {
            console.log(error)
        }
    }, [client, setItem, item, setHistories, match.params.itemId])

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
                {histories.map(history => <p>{history.to.first_name} {history.to.role}</p>)}
            <MDBTable>

            </MDBTable>
        </Container>
    )
}

export default withApollo(DispenseCollect);
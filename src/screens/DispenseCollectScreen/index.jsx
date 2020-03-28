import React, { useState, useEffect} from 'react'
import { Container } from "./style";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import { withApollo } from "react-apollo";
import 'mdbreact/dist/css/mdb.css';
import 'mdbreact/dist/css/style.css';
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
            <CollectModal histories={histories} isOpen={collectModalIsOpen} closeModal = {closeCollectModal} item={item}/>
            <p>Item History</p>
                
            <MDBTable borderless hover>
                <MDBTableHead color="blue" textWhite>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Type</th>
                        <th>Date</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {histories.map(history => 
                        <tr key={history.id}>
                            <td>{history.to.first_name}</td> 
                            <td>{history.to.email}</td>
                            <td>{history.to.role}</td>
                            <td>{history.type}</td>
                            <td>{new Date(parseInt(history.created_at)).toUTCString()}</td>
                        </tr>
                    )}
                </MDBTableBody>
            </MDBTable>
        </Container>
    )
}

export default withApollo(DispenseCollect);
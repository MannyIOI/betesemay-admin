import React, { useState, useEffect} from 'react'
import { Container,
            InfoContainer,
            TableContainer,
            ActionContainer

} from "./style";
import { 
    PrevButton,
    NextButton
} from "../EmployeesScreen/style";

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
    const [historyCount, setHistoryCount] = useState(0)
    const [item, setItem] = useState({})
    const [page, setPage] = useState(0)
    
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
                        variables: { item: item.id, page: page }
                    }).then(res => {
                        
                        setHistories(res.data.getHistoriesByItem.results)
                        setHistoryCount(res.data.getHistoriesByItem.total)
                    })
                }
            });       
            
        } catch (error) {
            console.log(error)
        }
    }, [client, page, setItem,item, setHistories, match.params.itemId])

    const onNextClicked = async () => {
        setPage(page+1)
    }
    const onPrevClicked = async () => {
        setPage(page-1)
    }
    
    return (
        <Container>
            <InfoContainer>
                <p>Item Detail</p>
                
                {item.state==="IN_STOCK" && <button onClick={openDispenseModal}>Dispense Item</button>}
                {item.state==="DISPENSED" && <button onClick={openCollectModal}>Collect Item</button>}
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{marginRight: "50px"}}>
                        <p>Item Id - {item.id}</p>
                        <p>Description - {item.descritpion}</p>
                    </div>
                    <div>
                        <p>State - {item.state}</p>
                        <p>Dispense Period - {item.dispense_period}</p>
                    </div>
                </div>
               
                
                <DispenseModal isOpen={dispenseModalIsOpen} closeModal = {closeDispenseModal} item={item}/>
                <CollectModal histories={histories} isOpen={collectModalIsOpen} closeModal = {closeCollectModal} item={item}/>
            </InfoContainer>
            <TableContainer>
                <MDBTable bordered hover style={{width: "100%", textAlign: 'center'}}>
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
            </TableContainer>
            <ActionContainer>
                <NextButton onClick={onNextClicked} disabled={(page)*11 + histories.length>=historyCount}>Next</NextButton>
                <PrevButton onClick={onPrevClicked} disabled={page<=0}>Previous</PrevButton>   

            </ActionContainer>
        </Container>
    )
}

export default withApollo(DispenseCollect);
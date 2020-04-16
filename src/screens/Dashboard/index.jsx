import React, { useState, useEffect } from 'react';
import Timeline from 'react-time-line';
import { Container, 
            ActivityContainer, 
            CreateContainer,
            Create, 
            CategoryItems, 
            ArrowContainer, 
            OverdueContainer,
            OverdueItems, 
            CategoryContainer,
            Header } from './styles'
import Category from "../../components/Category";
import Item from "../../components/Item";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import { GET_ALL_CATEGORIES, GET_All_HISTORY } from './queries';
import { GET_ALL_ITEMS } from "../Items/queries"
import { withApollo } from 'react-apollo';
import Loading from '../../components/Loading';

const Dashboard = ({client, history}) => {
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    
    const [page, setPage] = useState(0);
    const [itemPage, setItemPage] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [events, setEvents] = useState([]);
    const categoryLimit = 5;
    const itemLimit = 3;
    
    useEffect(() =>{
        client.query({
            query: GET_ALL_CATEGORIES,
            variables: { page, limit: categoryLimit },
        }).then(res => {
            setIsLoading(false)
            setCategories(res.data.getAllCategories.results)
            setCategoryCount(res.data.getAllCategories.total)
        }).catch(error => {
            console.log(error)
        })

        client.query({
            query: GET_All_HISTORY,
            variables: { page: 0 },
        }).then(res => {
            let events = []
            res.data.getAllHistory.results.forEach((element)=>{
                let text = ""  
                if(element.type === "COLLECTED"){ text = element.item.title + " collected from " }
                else { text = element.item.title + " dispensed to " }
                text += element.to.first_name
                let date = new Date(parseInt(element.created_at)).toISOString()
                events.push({ts: date, text: text })
            })
            setEvents(events)
        }).catch(error => {
            console.log(error)
        })

        client.query({
            query: GET_ALL_ITEMS,
            variables: { page: itemPage, limit: itemLimit }
        }).then(res => {
            setIsLoading(false)
            setItems(res.data.getAllItems.results)
            setItemCount(res.data.getAllItems.total)
        }).catch(error => {
            console.log(error)
        })
        
     }, [categories, client, page, itemPage]);

    const onNextClicked = async () => {
        setIsLoading(true)
        setPage(page+1)
    }
    const onPrevClicked = async () => {
        setIsLoading(true)
        setPage(page-1)
    }

    const onItemsNextClicked = async () => {
        setIsLoading(true)
        setItemPage(itemPage+1)
    }

    const onItemsPrevClicked = async () => {
        setIsLoading(true)
        setItemPage(itemPage-1)
    }


    return (
        <Container>
                <CreateContainer>
                    <Create onClick={()=>history.push({pathname: "/items/create/"})}>
                        <FaPlus style={{alignSelf: "center", justifySelf: "center"}}/>
                        <p>Create Item</p>
                    </Create>
                    <Create onClick={()=>history.push({pathname: "/categories/create/"})}>
                        <FaPlus color="white" style={{alignSelf: "center", justifySelf: "center"}}/>
                        <p>Create Category</p>
                    </Create>
                    <Create onClick={()=>history.push({pathname: "/employees/create/"})}>
                        <FaPlus color="white" style={{alignSelf: "center", justifySelf: "center"}}/>
                        <p>Create Employee</p>
                    </Create>
                </CreateContainer>
                <CategoryContainer>
                    <Header style={{gridRow: "1/2"}}>
                        <h2>Categories</h2>
                    </Header>
                    <CategoryItems>
                        { page <= 0 ? <div></div> : 
                            <ArrowContainer onClick={onPrevClicked}>
                                <FaArrowLeft size="30" style={{alignSelf: "center", justifySelf: "center"}}/>
                            </ArrowContainer> }
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
                            { isLoading && <Loading />}
                            { categories.map(category => (<Category key = { category.id } 
                                                        category = { category }
                                                        history = { history } />)) }
                            { categories.length === 0 && <h2>No Categories found</h2>} 
                        </div>
                        { (page)*categoryLimit + categories.length>=categoryCount ? <div></div> :
                            <ArrowContainer onClick={onNextClicked}>
                                <FaArrowRight size="30" style={{alignSelf: "center", justifySelf: "center"}}/>
                            </ArrowContainer> }
                    </CategoryItems>
                </CategoryContainer>
                <OverdueContainer>
                    <Header style={{gridRow: "1/2"}}>
                        <h2>Overdue Items</h2>
                    </Header>
                    <OverdueItems>
                        { itemPage <= 0 ? <div></div> : 
                        <ArrowContainer onClick={onItemsPrevClicked}>
                            <FaArrowLeft size="30" style={{alignSelf: "center", justifySelf: "center"}}/>
                        </ArrowContainer> }
                        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", overflowY: "hidden"}}>
                            { isLoading && <Loading />}
                            { items.map(item => (<Item key = { item.id } 
                                                        item = { item }/>)) }
                            { items.length === 0 && <h2>No Overdue items found</h2> }
                        </div>
                        { (itemPage)*itemLimit + items.length>=itemCount ? <div></div> :
                            <ArrowContainer onClick={onItemsNextClicked}>
                                <FaArrowRight size="30" style={{alignSelf: "center", justifySelf: "center"}}/>
                            </ArrowContainer>}
                    </OverdueItems>
                </OverdueContainer>
            <ActivityContainer>
                <Timeline items={events}/>
            </ActivityContainer>
        </Container>
    )
}

export default withApollo(Dashboard)
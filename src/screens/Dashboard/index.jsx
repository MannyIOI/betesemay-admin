import React, { useState, useEffect } from 'react';
import Timeline from 'react-time-line';
import { Container, 
            ActivityContainer, 
            CreateContainer,
            Create, 
            CategoryContainer, 
            ArrowContainer, 
            OverdueContainer,
            OverdueItems } from './styles'
import Category from "../../components/Category";
import Item from "../../components/Item";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import { GET_ALL_CATEGORIES, GET_All_HISTORY } from './queries';
import { withApollo } from 'react-apollo';
import Loading from '../../components/Loading';

const Dashboard = ({client, history}) => {
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
    const [events, setEvents] = useState([])
    
    useEffect(() =>{
        client.query({
            query: GET_ALL_CATEGORIES,
            variables: { page },
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
        
     }, [categories, client, page]);

    const onNextClicked = async () => {
        setIsLoading(true)
        setPage(page+1)
    }
    const onPrevClicked = async () => {
        setIsLoading(true)
        setPage(page-1)
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
                    <ArrowContainer onClick={onPrevClicked}>
                        <FaArrowLeft size="30" style={{alignSelf: "center", justifySelf: "center"}}/>
                    </ArrowContainer>
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr"}}>
                        { isLoading && <Loading />}
                        { categories.map(category => (<Category key = { category.id } 
                                                    category = { category }
                                                    history = { history } />)) }
                    </div>
                    <ArrowContainer onClick={onNextClicked}>
                        <FaArrowRight size="30" style={{alignSelf: "center", justifySelf: "center"}}/>
                    </ArrowContainer>
                </CategoryContainer>
                <OverdueContainer>
                    <div style={{gridRow: "1/2"}}>
                        Overdue Items
                    </div>
                    <OverdueItems>
                        <ArrowContainer onClick={onPrevClicked}>
                            <FaArrowLeft size="30" style={{alignSelf: "center", justifySelf: "center"}}/>
                        </ArrowContainer>

                        <Item item={{title: "title", imageId: "msiedvan1380uwvzfhk7", description: "description", state: "IN_STOCK", category: { title: "category long" }}}/>
                        <Item item={{title: "title", imageId: "msiedvan1380uwvzfhk7", description: "description", state: "IN_STOCK", category: { title: "category" }}}/>
                        <Item item={{title: "title", imageId: "msiedvan1380uwvzfhk7", description: "description", state: "IN_STOCK", category: { title: "short" }}}/>
                        
                        <ArrowContainer onClick={onNextClicked}>
                            <FaArrowRight size="30" style={{alignSelf: "center", justifySelf: "center"}}/>
                        </ArrowContainer>
                    </OverdueItems>
                </OverdueContainer>
            <ActivityContainer>
                <p>Activity</p>
                <Timeline items={events}/>
            </ActivityContainer>
        </Container>
    )
}

export default withApollo(Dashboard)
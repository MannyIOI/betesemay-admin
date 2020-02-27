import React, { Component } from 'react'
import { Container, NavigationContainer} from "./style"

import Item from "../../components/Item"

export default class Items extends Component {
    render() {
        return (
            <Container>
                <Item /><Item /><Item />
                <Item /><Item /><Item />
                <Item /><Item /> 
                
                <NavigationContainer> 
                    Nav Region
                </NavigationContainer>
            </Container>
        )
    }
}

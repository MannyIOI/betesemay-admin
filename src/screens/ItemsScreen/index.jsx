import React, { Component } from 'react'
import {Container} from "./style"

import Item from "../../components/Item"

export default class Items extends Component {
    render() {
        return (
            <Container>
                <Item /><Item /><Item />
            </Container>
        )
    }
}

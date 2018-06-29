import React from "react"
import "./styles.css"
import Card from "./Card";

class CardCont extends React.Component {

    state = {
        chars: []
    }

    render() {
        return (
            <Card/>
        )
    }
}

export default CardCont;
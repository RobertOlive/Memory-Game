import React from "react"
import "./styles.css"
import Card from "./Card";
import images from "./data/images"

class CardCont extends React.Component {

    state = {
        chars: images
    }

    render() {
        return (
            <div>
                {console.log(this.state.chars)}
                <Card image={this.state.chars[0].path}/>
            </div>
        )
    }
}

export default CardCont;


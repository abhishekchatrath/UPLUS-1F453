import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {

    constructor(props){
        super(props)
        this.state = props
    }

    render() {

        // for(var i = 0; i < 1; i++){

        // }
        let elements = this.props.cards.map((element) => {
            return (
                <Card
                    card={element}
                />
                )
        })
        return (
            <div className="body">
                <ul className="flex-container wrap">
                    {elements}
                </ul>
            </div>
        );
    }
}

export default CardList;
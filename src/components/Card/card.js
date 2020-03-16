import React, {Component} from "react";
import './card.css';

class Card extends Component{

    constructor()
    {
        super();
        this.state = {
            data: null,
        };
        this.getData();
    }

    getData()
    {
        fetch("http://dev-test-black.ru/testTask/data.json").then((response) => {
            response.json().then((result) => {
                this.setState({data:result.cards});
            })
        });
    }

    render(){
        return (
            <div>
                {
                    this.state.data ?
                        this.state.data.map((item) =>
                            <article>
                                <img src={item.img} alt=""/>
                                <h3>{item.name}</h3>
                                <button value={item.isNew}>New</button>
                                <p>{item.description}</p>
                            </article>
                        ) : <h3> Fetching...</h3>
                }
            </div>
        )
    }
}

export default Card;
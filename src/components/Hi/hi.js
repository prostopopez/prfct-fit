import React, {Component} from "react";
import './hi.less';

class Hi extends Component{

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
                this.setState({data:result.userData});
            })
        });
    }

    render(){
        return (
            <div>
                {
                    this.state.data ?
                        <div>
                            <p>Hi, {this.state.data.name} ! Here’s your weekly updates &#128064;</p>
                        </div>
                        : <h3> Fetching...</h3>
                }
            </div>
        )
    }
}

export default Hi;
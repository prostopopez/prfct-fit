import React from "react";
import './style.css';

const Index = (props) => {
    const { userData } = props;

    return <div>
        {
            userData === null
                ? <h3> Fetching...</h3>
                : <div>
                    <p className="greeting">Hi, {userData.name} ! Here’s your weekly updates &#128064;</p>
                </div>
        }
    </div>
};

export default Index;

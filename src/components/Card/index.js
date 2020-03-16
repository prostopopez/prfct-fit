import React from "react";
import './style.css';

const Cards = (props) => {
    const { cards } = props;

    return <div>
        {
            cards === null
                ? <h3> Fetching...</h3>
                : cards.map((item) =>
                    <article className="card">
                        <img className="newsImage" src={item.img} alt=""/>
                        <h3 className="semiBold">
                            {item.name}
                            {
                                item.isNew ? <span className="newTag">New</span> : null
                            }
                        </h3>
                        <p className="body3">{item.description}</p>
                    </article>
                )
        }
    </div>
};

export default Cards;
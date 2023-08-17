import "./CartItem.css";
import React from "react";

export default function CartItem({ img, price, title, removeItem, id }) {
    return (
        <div className="CartItem">
            <div className="main">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="title">{title}</div>
                <div className="price">INR {price}</div>
            </div>
            <button className="btn btn-primary" onClick={() => removeItem(id)}>
                Remove Item
            </button>
        </div>
    );
}

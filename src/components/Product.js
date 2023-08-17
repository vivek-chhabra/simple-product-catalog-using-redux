import "./Product.css";
import React from "react";

export default function Product({ title, price, img, product, addToCart }) {
    return (
        <div className="Product">
            <div className="main">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="title">{title}</div>
                <div className="price">INR {price}</div>
            </div>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
}

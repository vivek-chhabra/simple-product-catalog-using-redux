import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem";
import "./Cart.css";
import React from "react";
import { removeCartItem } from "../../redux/slice/productSlice";

export default function Cart() {
    // selector
    const state = useSelector((data) => {
        return data;
    });
    const { cartItems } = state;

    // dispatch
    const dispatch = useDispatch();

    // remove item
    const removeItem = (id) => {
        dispatch(removeCartItem(id))
    };

    return (
        <div className="Cart">
            {cartItems.length === 0 && (
                <div className="alert alert-primary" role="alert">
                    <h4 className="alert-heading">Your Cart is Empty!</h4>
                    <p>It seems like your shopping cart is currently empty. Feel free to browse our collection and add items that catch your interest. Should you have any questions or need assistance, our customer support team is here to help.</p>
                    <hr />
                    <p className="mb-0">Happy shopping!</p>
                </div>
            )}
            {cartItems.map((item, idx) => (
                <CartItem title={item.title} img={item.image} price={item.price} id={item.id} removeItem={removeItem} />
            ))}
        </div>
    );
}

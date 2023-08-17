import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product";
import { fetchRequest, getCartItems } from "../../redux/slice/productSlice";
import "./Home.css";
import React, { useEffect } from "react";

export default function Home() {
    // dispatch
    const dispatch = useDispatch();

    // fetching the data
    useEffect(() => {
        dispatch(fetchRequest());
    }, []);

    // state
    const state = useSelector((data) => {
        return data;
    });
    const { isPending, error, products, cartItems } = state;

    // add to cart
    const addToCart = (item) => {
        dispatch(getCartItems(item));
    };

    return (
        <div className="Home">
            {error && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Oops!</strong> {error}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
            {isPending ? (
                <div className="d-flex align-items-center">
                    <strong role="status">Loading...</strong>
                    <div className="spinner-border ms-auto" aria-hidden="true"></div>
                </div>
            ) : (
                <div className="products">
                    {products.map((product, idx) => (
                        <Product addToCart={addToCart} product={product} title={product.title} img={product.image} price={product.price} />
                    ))}
                </div>
            )}
        </div>
    );
}

import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Amazon-Clone" element={<Navigate to={'/'}></Navigate>} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;

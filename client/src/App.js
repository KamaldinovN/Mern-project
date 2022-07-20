import React from "react";
import './scss/app.scss'
import Header from "./components/Header.js";
import {Home} from "./pages/Home.js";
import {Route, Routes} from "react-router-dom";
import {NoFound} from "./pages/noFound.js";
import {Cart} from "./pages/Cart.js";

function App() {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<NoFound/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
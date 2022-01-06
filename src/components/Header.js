import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
    return (
        <div className='header'>
           <ul className='headerlist'>
                <li>
                    <Link className="listitmes" to="/">Home</Link>
                </li>
                <li>
                    <Link className="listitmes" to="/cart">Cart</Link>
                </li>
                <li>
                    <Link className="listitmes" to="/login">Login</Link>
                </li>
           </ul>
        </div>
    )
}

export default Header

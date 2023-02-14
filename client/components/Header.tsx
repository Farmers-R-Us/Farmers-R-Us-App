import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    function logout() {

    }

    return (
        <div className="navBar">
            <h1>Farmers R Us</h1>
            <button className="btn" onClick={() => {logout}}>Logout</button>
        </div>
    );
}
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';



export default function App() {
    return (
        <div>
            {/* <Header /> */}
            {/* <h3>Hello world</h3> */}
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='home' element={<Home />} />
            </Routes>
        </div>
    )
}
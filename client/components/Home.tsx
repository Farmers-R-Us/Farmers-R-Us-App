import React from 'react';
import Customer from './Customer';
import Header from './Header';
import Admin from './Admin';
import { useLocation } from 'react-router-dom'


export default function Home() { 
    const {state} = useLocation();
    const {gmail, isadmin, strikes, isblacklisted} = state;
    console.log('gmail:', gmail);
    console.log('isadmin:', isadmin);
    console.log('strikes:', strikes);
    console.log('isblacklisted:', isblacklisted);
    return (
        <>
            <Header />
            {/* ternary */}
            <Admin />
            {/* <Admin /> */}
        </>
    )

}
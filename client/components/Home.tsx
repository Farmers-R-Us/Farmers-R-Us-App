import React from 'react';
import Customer from './Customer';
import Header from './Header';
import Admin from './Admin';


export default function Home() { 

    return (
        <>
            <Header />
            {/* ternary */}
            <Admin />
            {/* <Admin /> */}
        </>
    )

}
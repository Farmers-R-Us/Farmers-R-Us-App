import React from 'react';
import Customer from './Customer';
import Header from './Header';


export default function Home() { 

    return (
        <>
          <h2>hello world</h2>
            <Header />
            {/* ternary */}
            <Customer />
            {/* <Admin /> */}
        </>
    )

}
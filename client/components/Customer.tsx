import React, { useState, useEffect } from 'react';
import PaginatedProducts from './PaginatedProducts';

export default function Customer() {
  // let data = [];
  let responseData;
  let [data, setData] = useState([]);

  useEffect(() => {
    // fetch the inventory
    const URL = 'http://localhost:3000/api/inventory';

    const fetchData = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log('form within fetch', data);
          responseData = data;
          setData(data);
        })
        .catch((error) => {
          console.log('error from fetchData()', error);
        });
    };

    fetchData(URL);
  }, []);

  return (
    <>
      <h3>List of all available products</h3>
      {console.log('from parent', data)}
      <PaginatedProducts data={responseData} />
    </>

    //<PaginatedProducts /> component:

    // <ProductCard /> component:
    // product image
    // product name
    // product unit
    // quantity

    // <AddToCart /> component:
    // button: add to cart
    // value field (num)

    // forward arrow (down-arrow on mobile) - get icons from react-icons or whatever that was
    // backward arrow (up-arrow on mobile)
  );
}

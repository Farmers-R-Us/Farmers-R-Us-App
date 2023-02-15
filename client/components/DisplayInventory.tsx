import React from 'react';

export default function Customer(props: any) {
  const {
    id,
    product_name,
    price,
    unit,
    total_quantity,
    total_reserved_quantity,
  } = props.data;

  return (
    <>
      {/* img  */}
      <ul>
        <li>ID: {id}</li>
        <li>Product Name: {product_name}</li>
        <li>Price: {price}</li>
        <li>Unit: {unit}</li>
        <li>Available: {total_quantity - total_reserved_quantity}</li>
      </ul>
    </>
  );
}

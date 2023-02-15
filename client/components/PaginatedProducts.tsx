import React from 'react';

// incoming props:
// totalCount
// currentRow
// rowSize
// onRowChange

export default function Customer(props) {
  const { totalCount, currentRow, maxRowSize, minRowSize, data } = props;

  const handleNextClick = function () {};
  const handlePrevClick = function () {};

  const renderData = (data) => {
    console.log('from renderdata', data);
    return data;
    // <ul>
    //   {data.forEach((product) => {
    //     <li>product[product_name]</li>;
    //   })}
    // </ul>;
  };

  return (
    <>
      <button onClick={handlePrevClick}>Prev</button>
      {/* display data[currentRow, currentRow+(either maxRowSize or minRowSize)] */}
      {renderData(data)}
      <button onClick={handleNextClick}>Next</button>
    </>
  );
}

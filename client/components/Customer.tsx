import React, { useState, useEffect } from 'react';
import PaginatedProducts from './PaginatedProducts';

export default function Customer() {
  const [data, setData] = useState<any>();
  const [startRenderIndex, setStartRenderIndex] = useState<number>(0);
  const [endRenderIndex, setEndRenderIndex] = useState<number>(4);
  const [renderArr, setRenderArr] = useState<any[]>([]);

  useEffect(() => {
    // fetch the inventory
    const URL = 'http://localhost:3000/api/inventory';

    const fetchData = (url) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log('error from fetchData()', error);
        });
    };

    fetchData(URL);
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
      render();
    }
  }, [data, startRenderIndex]);

  function next() {
    if (data.length < endRenderIndex + 4) {
      setEndRenderIndex(data.length);
      setStartRenderIndex(data.length - 4);
    } else {
      setEndRenderIndex(endRenderIndex + 4);
      setStartRenderIndex(startRenderIndex + 4);
    }
  }

  function prev() {
    if (startRenderIndex - 4 < 0) {
      setEndRenderIndex(4);
      setStartRenderIndex(0);
    } else {
      setEndRenderIndex(endRenderIndex - 4);
      setStartRenderIndex(startRenderIndex - 4);
    }
  }

  function render() {
    console.log(startRenderIndex, endRenderIndex);
    let newRenderArr: any[] = [];
    for (let i = startRenderIndex; i < endRenderIndex; i++) {
      newRenderArr.push(
        <>
          <PaginatedProducts data={data[i]} />
        </>
      );
    }
    setRenderArr(newRenderArr);
  }

  const handleNextClick = function () {
    next();
  };

  const handlePrevClick = function () {
    prev();
  };

  return (
    <>
      <h3>List of all available products</h3>
      <button onClick={handlePrevClick}>Prev</button>
      <div>{renderArr}</div>
      <button onClick={handleNextClick}>Next</button>
    </>
  );
}

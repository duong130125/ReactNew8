import React, { useState, useEffect, useRef } from 'react';

export default function B7() {
  const [count, setCount] = useState<number>(0);
  
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Giá trị trước: {prevCount.current}</p>
      <p>Giá trị của hiện tại: {count}</p>
      <button onClick={handleClick}>Tăng</button>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

export default function B6() {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScroll(position);
      document.title = `Vị trí cuộn: ${position}`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <p>Scroll Position: {scroll}</p>
    </>
  );
}

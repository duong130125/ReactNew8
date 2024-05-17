import React, { useEffect, useState } from 'react'

export default function B9() {
    const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
        <h1>Thời gian đã trôi qua: {seconds} giây</h1>
    </>
  )
}

import React, { useEffect, useState } from 'react'

export default function B5() {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const tick = () => setTime(new Date());

        const intervalID = setInterval(tick, 1000);
        return () => clearInterval(intervalID); 
    }, []);

    const formTime = time.toLocaleTimeString();

  return (
    <>
    <h2>Thời gian hiện tại: {formTime}</h2>
    </>
  )
}

import React, { useEffect, useState } from 'react'

export default function B2() {
    const [count,setCount] = useState<number>(0)
    useEffect (() => {
        document.title = `Click ${count} lần`
    },[count])
    const handleClick = () => {
        setCount(count+1)
    }
  return (
    <>
    <button onClick={handleClick}>Click {count} lần</button>
    </>
  )
}

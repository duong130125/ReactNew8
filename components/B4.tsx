import React, { useEffect, useRef } from 'react'

export default function B4() {
    const focusInput = useRef<HTMLInputElement>(null)
    useEffect(() => {
        focusInput.current?.focus()
    },[])
  return (
    <>
    <input type="" ref={focusInput} placeholder='Focus me...'/>
    </>
  )
}

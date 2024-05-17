import React, { useEffect, useState } from 'react'

export default function B10() {
    const [keyInfo, setKeyInfo] = useState<{ key: string, code: number | null }>({ key: '', code: null });

    useEffect(() => {
      const handleKeyPress = (event: KeyboardEvent) => {
        setKeyInfo({ key: event.key, code: event.keyCode });
      };
  
      window.addEventListener('keydown', handleKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
  
  return (
    <>
    <h3>Bạn đã nhấn phím: {keyInfo.key}</h3>
    <h3>Mã phím: {keyInfo.code}</h3>
    </>
  )
}


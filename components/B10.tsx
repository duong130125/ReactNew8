import React, { useEffect, useState } from 'react';

export default function B10() {
  const [keyInfo, setKeyInfo] = useState<{ key: string, code: string | null }>({ key: '', code: null });

  useEffect(() => {
      const handleKeyPress = (event: KeyboardEvent) => {
          let key = '';
          let code = '';

          if ((event.key >= '0' && event.key <= '9') || (event.key >= 'a' && event.key <= 'z') || (event.key >= 'A' && event.key <= 'Z')) {
              key = event.key;
              code = event.key.charCodeAt(0).toString();
          } else {
              key = event.key;
              code = 'Không phải số hoặc chữ cái';
          }

          setKeyInfo({ key, code });
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
  );
}

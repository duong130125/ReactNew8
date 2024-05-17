import React, { useEffect, useState } from 'react'

export default function B8() {
    const [season, setSeason] = useState<string>('');
    const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  
    useEffect(() => {
      const getSeason = (month: number): string => {
        if (month >= 1 && month <= 3) {
          return 'Xuân';
        } else if (month >= 4 && month <= 6) {
          return 'Hạ';
        } else if (month >= 7 && month <= 9) {
          return 'Thu';
        } else {
          return 'Đông';
        }
      };
  
      setSeason(getSeason(month));
    }, [month]);
  return (
    <>
    <h3>Bây giờ là tháng: {month}</h3>
    <h3>Mùa hiện tại: {season}</h3>
    </>
  )
}

'use client'

import { useState, useEffect } from 'react';
import { formatTime } from '@/app/(protected)/purchases/utils';


export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex items-center gap-2'>
      <p className='text-right text-2xl'>{formatTime(time)}</p>
    </div>
  );
};

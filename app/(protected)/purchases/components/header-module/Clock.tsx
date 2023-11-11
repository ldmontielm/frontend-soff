// 'use client'
// import { useState, useEffect } from 'react';

// export default function Clock() {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setTime(new Date());
//       }, 1000);
  
//       return () => clearInterval(interval);
//     }, []);
  
//     const formatTime = (time:any) => {
//       const options = { hour: 'numeric', minute: '2-digit', hour12: true };
//       return time.toLocaleString('en-US', options);
//     };
  
//     return (
//         <>
//             <p>{formatTime(time)}</p>
//         </>
//     );
// };

// utils.js
// export const formatTime = (time) => {
//     const options = { hour: 'numeric', minute: '2-digit', hour12: true };
//     return time.toLocaleString('en-US', options);
//   };
  
// Clock.js
'use client'
import { useState, useEffect } from 'react';
import { formatTime } from '../../utils';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>{formatTime(time)}</p>
    </>
  );
};


  
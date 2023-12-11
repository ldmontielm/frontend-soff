import React from 'react'

export default function Footer() {
  const getCurrentYear = () => {
    let d = new Date
    return d.getFullYear()
  } 
  return (
    <div className='w-full mt-auto p-4'>
      <p className='text-center'>© SOFF - Systematization Of Fast Food {getCurrentYear()}</p>
    </div>
  )
}

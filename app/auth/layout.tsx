import React from 'react'
import SoffLogo from "@/public/soff.svg"
import Image from 'next/image'


interface Props {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <>
    <div className='py-5'  >
      <div className='max-w-7xl  mx-auto flex items-center gap-4 justify-between  px-4'>
        <div>
            <Image src={SoffLogo} alt='logo soff' width={36} height={36} />
        </div>
      </div>
    </div>
        {children}
    </>
  )
}

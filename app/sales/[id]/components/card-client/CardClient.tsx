'use client'

import React from 'react'
import Image from 'next/image';
import user from '../../../../assets/Number=74.png'
import { Client } from '@/app/sales/models/sale.models';
import { Button} from '@/components/ui/button';
import { TrashIcon } from '@heroicons/react/24/outline';

interface Props {
  payment_type: string
}


export default function CardClient({payment_type}: Props) {
  const client: string | null = localStorage.getItem('client');
  let clientParsed:Client = {id:'', name:'', direction: '', phone: '', email: ''}
  if (client !== null){
    clientParsed = JSON.parse(client)
  }
  return (
    <div className='rounded-md py-2 px-3 flex items-center justify-between border '>
      <div className='flex items-center gap-2'>
        <Image src={user} width={50} height={50} alt='user account' className='rounded-full'/>
        <div className='text-sm'>
          <p className='capitalize font-semibold'>{payment_type === 'fisico' || clientParsed.name === '' ?  'general': clientParsed.name }</p>
          <p className='text-gray-500 text-[12px]'>(+57) {payment_type === 'fisico' || clientParsed.phone === '' ?  '3001234567': clientParsed.phone }</p>
        </div>
      </div>
      {
        payment_type !== 'fisico' && clientParsed.name !== ''? (
          <Button variant='outline' size='icon' className='group hover:bg-red-500'>
            <TrashIcon className='h-4 w-4 group-hover:text-white' />
          </Button>
        ) : ""
      }
    </div>
  )
}

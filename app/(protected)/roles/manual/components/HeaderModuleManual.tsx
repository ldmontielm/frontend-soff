import React from "react";
import { Tooltip } from '@mui/material'
import { Routes } from '@/models/routes.models'
import Link from "next/link";
import { Button } from '@/components/ui/button'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/outline'


export function HeaderModuleManual() {
    return (
        <div className='w-full flex justify-between items-center'>
            <div className='mb-5'>
            <p className='scroll-m-20 text-3xl font-extrabold tracking-tight transition-colors first:mt-0'>Manual de usuario</p>
            <p className="leading-7 [&:not(:first-child)]:mt-1 text-gray-500">Este manual le guiará en la navegación del módulo de roles.</p>
            </div>
            <div className='flex justify-end mr-5'>
            <Tooltip placement="top" title="Volver a Roles." arrow>
                <Link href={`${Routes.ROLES}`} >  
                <Button variant="outline">
                    <ArrowSmallLeftIcon className='w-5 h-5'/>
                </Button>
                </Link>
            </Tooltip>
            </div>
        </div>
    )
  }
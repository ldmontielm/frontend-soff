'use client'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/auth-context/AuthContextProvider'
import { FormProfile } from '../form-profile'
import ImageProfile from '@/public/profile.png'
export default function CardComponent() {
    const {user} = useAuth()
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-lg'>Detalles de Cuenta</CardTitle>
                <CardDescription>Gestiona tu información personal</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <div className='flex flex-col gap-2 md:flex-row items-center justify-between'>
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='w-20 h-20 rounded-full overflow-hidden'>
                                <Image width='500' height='500' src={ImageProfile} alt='foto de perfil' />
                            </div>
                            <div className='flex flex-col gap-2 text-center md:text-left'>
                                <p className='font-semibold'>Imagen de Perfil</p>
                                <p>Imagen máximo de 5MB</p>
                            </div>
                        </div>
                        <div className='w-full md:w-fit'>
                            <Button variant='outline' className='w-full'>Cambiar</Button>
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <FormProfile />
                </div>
            </CardContent>
        </Card>
    )
}
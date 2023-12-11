'use client'
import React from 'react'
import Target from '../target/Target'
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'


export default function ContentTargets() {
    const {data: targets} = useSWR(`${RoutesApi.DASHBOARD}`)


  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
            Array.isArray(targets) && targets.map((target, index) => (
                <Target key={index} target={target} />
            ))
        }
    </div>
  )
}

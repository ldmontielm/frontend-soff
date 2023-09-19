'use client'
import React from 'react'
import useSWR from 'swr'
import { getRoles } from '@/app/sales/services/sale.services'
export default function ListRoles() {
  const {data:roles} = useSWR('http://localhost:8000/role/get-role', getRoles)
  return (
    <div>
      <h1>Roles</h1>
      {
        Array.isArray(roles) && roles.map((role) => (
          <p key={role.id}>{role.name}</p>
        ))
      }
    </div>
  )
}

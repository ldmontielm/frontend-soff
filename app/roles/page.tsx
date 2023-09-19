import React from 'react'
import { AddRole, ListRoles } from './components'
export default function page() {
  return (
    <main className="mx-auto max-w-7xl p-4">
      <AddRole />
      <ListRoles />
    </main>
  )
}

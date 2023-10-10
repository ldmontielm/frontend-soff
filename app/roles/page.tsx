'use client'
import {columns } from "./payments/columns"
import { DataTable } from "./payments/data-table";
import { urlRoles, getRole } from "./services/roles.services";
import useSWR from "swr";
import HeaderModule from "./components/header-module/Header";

export default  function DemoPage() {
  const { data:role} = useSWR(`${urlRoles}/get-role`, getRole)

  const data = role
  ? role.map((roleItem) => ({
      id:roleItem.id,
      name: roleItem.name,
      Permissions:roleItem.Permissions,
      status: Boolean(roleItem.status), // Convierte status a booleano
    }))
  : [];
    
  return (
    <div className="container mx-auto py-10">
      <HeaderModule/>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
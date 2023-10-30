'use client'
import {columns } from "./payments/columns"
import { DataTable } from "./payments/data-table";
import { urlRoles, getRole } from "./services/roles.services";
import useSWR from "swr";
import { RoutesApi } from "@/models/routes.models";
import HeaderModule from "./components/header-module/Header";


export default  function DemoPage() {
  const { data:roles} = useSWR(`${RoutesApi.ROLES}/get-role`)

    
  return (
    <div className="container mx-auto py-10">
      <HeaderModule/>
      <DataTable columns={columns} data={roles || []} />
    </div>
  );
}
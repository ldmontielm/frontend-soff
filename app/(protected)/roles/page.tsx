'use client'
import {columns } from "./payments/columns"
import { DataTable } from "./payments/data-table";
import useSWR from "swr";
import { RoutesApi } from "@/models/routes.models";
import HeaderModule from "./components/header-module/Header";
import { useState } from "react";

export default  function DemoPage() {
  const [active, setActive] = useState(true)

  const { data:roles} = useSWR(`${RoutesApi.ROLES}?status=${active}`)

    
  return (
    <div className="mx-auto lg:max-w-7xl p-4">
      <HeaderModule/>
      <div>
        <DataTable  columns={columns} data={roles || []} consult={active} setActive={setActive} />
      </div>
    </div>
  );
}
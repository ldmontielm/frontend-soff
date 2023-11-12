'use client'
import {columns } from "./payments/columns"
import { DataTable } from "./payments/data-table"
import useSWR from "swr";
import HeaderModule from "./components/header-module/Header";
import { RoutesApi } from "@/models/routes.models";
import { useState } from "react";



export default  function DemoPage() {

  const [active, setActive] = useState(true)
  const { data: users } = useSWR(`${RoutesApi.USERS}/get-users/?status=${active}`);
  return (
    <div className="container mx-auto py-10"> 
      <HeaderModule/>
      <DataTable consult={active} setActive={setActive} columns={columns} data={users || []} />
    </div>
  );
}
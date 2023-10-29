'use client'
import {columns } from "./payments/columns"
import { DataTable } from "./payments/data-table"
import useSWR from "swr";
import HeaderModule from "./components/header-module/Header";
import { RoutesApi } from "@/models/routes.models";



export default  function DemoPage() {

  const { data: users } = useSWR(`${RoutesApi.USERS}/get-users`);
  return (
    <div className="container mx-auto py-10">
      <HeaderModule/>
      <DataTable columns={columns} data={users || []} />
    </div>
  );
}
'use client'
import {columns } from "./payments/columns"
import { DataTable } from "./payments/data-table"
import { urlUser, getUsers } from "./services/users.services";
import useSWR from "swr";
import HeaderModule from "./components/header-module/Header";

export default  function DemoPage() {
  const { data:user} = useSWR(`${urlUser}/get-users`, getUsers)

  const data  = user
    ? user.map((userItem) => ({
        name: userItem.name,
        document_type:userItem.document_type,
        document:userItem.document,
        phone:userItem.phone,
        email: userItem.email,
        status: userItem.status,
        role:userItem.role,
        
        
      }))
      : [];
    console.log(user);

  return (
    <div className="container mx-auto py-10">
      <HeaderModule/>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
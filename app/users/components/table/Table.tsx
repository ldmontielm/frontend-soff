'use client'
import React from "react";
import useSWR from 'swr'
import { 
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHeader,
    TableHead,
    TableFooter,
    TableRow,
} from "@/components/ui/table"
import { urlUser, getUsers } from "../../services/users.services";
import { error, table } from "console";
import { Badge } from "@/components/ui/badge";
import HeadTable from "../head-table/HeadTable";

export default function TableComponent(){
    const {data: user, isLoading, isValidating, error} = useSWR(urlUser, getUsers)
    return (
        <div>
            <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between md:space-x-2 space-y-2 md:space-y-0 mb-5">
                <HeadTable />
            </div>
            <div className="border rounded">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Correo</TableHead>
                            <TableHead>Rol</TableHead>
                            <TableHead>Estado</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* {isLoading ? "Caragado informacion...":error} */}
                        {
                            Array.isArray(user) && user.map((users) => (
                                <TableRow key={users.id}>
                                    <TableCell>{users.name}</TableCell>
                                    <TableCell>{users.email}</TableCell>
                                    <TableCell>{users.id_role}</TableCell>
                                    <TableCell className="text-right"><Badge>{users.status ? "Activo": "Inactivo"}</Badge></TableCell>
                                </TableRow>
                                
                                ))
                            }
                    </TableBody>
                </Table>
                
            </div>
        </div>
    )
}

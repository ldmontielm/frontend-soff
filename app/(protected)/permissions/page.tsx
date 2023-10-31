// 'use client'
// import { columns } from "./payments/columns";
// import { DataTable } from "./payments/data-table"
// import { urlPermission, getPermissions } from "./services/permissions";
// import useSWR from "swr";
// import HeaderModule from "./components/header-module/Header";

// export default  function DemoPage() {
//   const { data:permission} = useSWR(`${urlPermission}/get-permision`, getPermissions)

//   const data  = permission
//     ? permission.map((permissionItem) => ({
//         name: permissionItem.name,
//       }))
//       : [];
//       console.log(permission)

//   return (
//     <div className="container mx-auto py-10">
//       <HeaderModule/>
//       <DataTable columns={columns} data={data} />
//     </div>
//   );
// }
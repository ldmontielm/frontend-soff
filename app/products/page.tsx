import { HeaderModule, TableComponent } from "./components"
export default async function Page() {
    return (
      <div className="mx-auto max-w-7xl p-4">
        <HeaderModule />
        <TableComponent/>
      </div>
    )
  }
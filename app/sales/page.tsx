import { HeaderModule, TableComponent } from "./components"

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl p-4">
      <HeaderModule />
      <TableComponent />
    </main>
  )
}
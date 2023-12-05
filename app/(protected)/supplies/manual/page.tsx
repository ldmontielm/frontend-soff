import { Manual } from "."
import { HeaderModuleManual } from "../components/header-module/HeaderModule"
export default async function Page() {
    return (
      <div className="mx-auto max-w-7xl p-4">
        <HeaderModuleManual/>
        <Manual/>
      </div>
    )
  }
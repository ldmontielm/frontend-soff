import Manual from "./components/Manual"
import { HeaderModuleManual } from "./components/HeaderModuleManual"

export default async function Page() {
    return (
    <div className="mx-auto max-w-7xl p-4">
        <HeaderModuleManual/>
        <Manual/>
    </div>
    )
}
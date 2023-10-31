import { HeaderModule } from "@/components/page-components"
import { ContentTargets, BarSales, PieSales } from "./components"

export default function page() {
    return (
        <main className="w-full mx-auto max-w-7xl p-4">
          <HeaderModule />
          <ContentTargets />
          <div className="my-10 gap-4 grid grid-cols-1 md:grid-cols-2">
            <PieSales />
            <BarSales />
          </div>
        </main>
    )
}

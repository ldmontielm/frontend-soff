import { HeaderModule } from "@/components/page-components"
import { ContentTargets, BarSales, PieSales } from "./components"
import { ChartSales } from "./components/chart-sales"

export default function page() {
    return (
        <main className="w-full mx-auto max-w-7xl p-4">
          <HeaderModule />
          <ContentTargets />
          <div className="my-10 gap-4 grid grid-cols-1 ">
            <PieSales />
            <ChartSales/>
          </div>
        </main>
    )
}

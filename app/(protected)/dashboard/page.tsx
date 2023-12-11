import { HeaderModule } from "@/components/page-components";
import { ContentTargets, BarSales, PieSales } from "./components";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utilities/authOptions";
import { redirect } from "next/navigation";
import { ChartSales } from "./components/chart-sales";
import ChartSales2 from "./components/chart-products/ChartProducts";

export default async function page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  return (
    <main className="w-full mx-auto max-w-7xl p-4">
      <HeaderModule />
      <ContentTargets />
      <div className="my-10 gap-4 grid grid-cols-1 sm:grid-cols-2">
        <div className="col-span-2">
          <PieSales />
        </div>
        <div className="flex w-full space-x-4">
          {/* Ajustamos el ancho a 80% */}
          <div className="w-4/5 h-full">
            {ChartSales()}
          </div>
          <div className="w-1/5 h-full">
            {ChartSales2()}
          </div>
        </div>
      </div>
    </main>
  );
}
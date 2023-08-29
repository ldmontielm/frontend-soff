import { HeaderModule } from "@/components/page-components"
import { ShoppingCartIcon, WalletIcon, SparklesIcon, PresentationChartBarIcon } from "@heroicons/react/24/outline"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const statistics = [
  {
    id: 1,
    title: 'Ventas',
    value: '+268',
    description: 'Realizamos un 12% más de ventas que la semana pasada',
    icon: <ShoppingCartIcon className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Dinero ganado',
    value: '$1’800.000',
    description: 'Realizamos un 08% más de dinero que la semana pasada',
    icon: <WalletIcon className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Días más vendidos',
    value: 'Sábado',
    description: '¿Sabías que los sábados hay un aumento del 20% en las ventas?',
    icon: <SparklesIcon className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'Producto más vendidos',
    value: 'Q’bano Ranchero',
    description: 'El Cubano Ranchero es el producto más vendido, a las personas les encanta',
    icon: <PresentationChartBarIcon className="w-6 h-6" />
  },
  
]

export default function Home() {
  return (
    <main className="w-full mx-auto max-w-7xl p-4">
      <HeaderModule />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {
          statistics.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center gap-2 text-gray-500">
                {item.icon}
                <CardTitle>{item.title}</CardTitle>
              </div>
                <p className="font-black text-2xl py-4">{item.value}</p>
              <CardDescription className="text-sm">{item.description}</CardDescription>
            </Card>
          ))
        }
      </div>
    </main>
  )
}

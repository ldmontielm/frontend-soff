'use client'
import { Chart as ChartJS, LinearScale,PointElement,ArcElement, Tooltip, Legend, LineElement, Title, CategoryScale } from "chart.js";
import { Line } from 'react-chartjs-2';
import {months} from '@/lib/chart-utils'
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'
import { Sale } from "@/app/(protected)/sales/models/sale.models";
import React, { useEffect, useState } from 'react';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function PieSales() {
  const {data: salesMonth, error } = useSWR(`${RoutesApi.DASHBOARD}/grafic_sales`)
  const [chartData, setChartData] = useState({labels:[],
    datasets: [{
    label: 'Ventas mensuales',
    data:[],
    fill: false,
    borderColor: '#6d28d9',
    tension: 0.1
    }]
  })

  useEffect(()=>{
    if(salesMonth){
      const labels = salesMonth.map((sale:any) => sale.Mes)
      const data = salesMonth.map((sale:any) => sale.VentasTotales)

      setChartData({
        labels,
        datasets: [{
        label: 'Ventas mensuales',
        data,
        fill: false,
        borderColor: '#6d28d9',
        tension: 0.1
        }]
      })
    }
  }), [salesMonth];

  if (error) {
    console.error('Error al obtener datos:', error);
    return <div>Error al cargar datos</div>;
  }

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

  return <Line className="w-full" options={options} data={chartData}/>
}

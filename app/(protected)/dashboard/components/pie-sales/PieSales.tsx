'use client'
import { Chart as ChartJS, LinearScale,PointElement,ArcElement, Tooltip, Legend, LineElement, Title, CategoryScale } from "chart.js";
import { Line } from 'react-chartjs-2';
import {months} from '@/lib/chart-utils'
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'
import { Sale } from "@/app/(protected)/sales/models/sale.models";
import React, { useEffect, useState, useMemo } from 'react';


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
  const allMonths = useMemo(() => [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ], []);

  const [chartData, setChartData] = useState({labels:allMonths,
    datasets: [{
    label: 'Ventas mensuales',
    data:Array(allMonths.length).fill(0),
    fill: false,
    borderColor: '#6d28d9',
    tension: 0.1
    }]
  })

  useEffect(()=>{
    if(salesMonth){
      const labels = salesMonth.map((sale:any) => sale.Month)
      const data = salesMonth.map((sale:any) => sale.Total_Sales)
      const year = salesMonth.map((sale:any) => sale.Year)

      const filledData = Array(allMonths.length).fill(0);
      labels.forEach((label: string, index: number) => {
        const monthIndex = allMonths.indexOf(label);
        filledData[monthIndex] = data[index];
      });

      setChartData({
        labels: allMonths,
        datasets: [{
        label: `Ventas ${year}`,
        data: filledData,
        fill: false,
        borderColor: '#6d28d9',
        tension: 0.1
        }]
      });
    }
  }, [salesMonth, allMonths]);

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
  scales:{
    x:{
      title:{
        display:true,
        text: 'Meses'
      }
    },
    y:{
      title:{
        display:true,
        text:'Ventas'
      }
    }
  }
};

  return <Line className="w-full" options={options} data={chartData}/>
}

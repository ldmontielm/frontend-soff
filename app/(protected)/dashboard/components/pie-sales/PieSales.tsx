'use client'
import { Chart as ChartJS, LinearScale,PointElement, Tooltip, Legend, LineElement, Title, CategoryScale } from "chart.js";
import { Line, Bar } from 'react-chartjs-2';
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image'
import SoffLogo from "@/public/soff.svg"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import numeral from 'numeral'

import { Activity } from "lucide-react";

interface SalePayment {
  Año: number
  Mes: string
  Ventas_Totales: number
  Ventas_Efectivo: number
  Ventas_Transferencia: number
  Porcentaje_Efectivo: number
  Porcentaje_Transferencia: number
}

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
  const {data: salesPayment} = useSWR<SalePayment>(`${RoutesApi.DASHBOARD}/grafic_payment`)
  const allMonths = useMemo(() => [
    'Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.',
    'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'
  ], []);
  const [maxSaleMonth, setMaxSaleMonth] = useState<string | null>(null)
  const [maxSaleValue, setMaxSaleValue] = useState<number | null>(null)
  const [minSaleMonth, setMinSaleMonth] = useState<string | null>(null)
  const [minSaleValue, setMinSaleValue] = useState<number | null>(null)
  const [differenceSale, setDifferenceSale] = useState<number | null>(null)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [dataPayment, setDataPayment] = useState<any>([])


  const [chartData, setChartData] = useState({
    labels:allMonths,
    datasets: [{
      data:Array(allMonths.length).fill(0),
      borderColor: '#3b82f6',
      backgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointBorderWith: 4,
      tension: 0.5
    }]
  })

  const [barData, setBarData] = useState({
    labels: ["Efectivo", "Transferencia"],
    datasets: [
      {
        axis: 'y',
        data: dataPayment,
        backgroundColor: [
          '#3b82f6',
          '#10b981'
        ],
        borderColor: [
          '#3b82f6',
          '#10b981'
        ],
        borderWidth: 1
      }
    ]
  })

  const convertToCOP = (money: number | null) => {
    if (money !== null && money !== undefined) {
        const formattedMoney = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(money)
  
        return formattedMoney;
    }
  
    return ''
  }

  useEffect(()=>{
    if(salesMonth){
      const filledData = Array(allMonths.length).fill(0);
      
      salesMonth
      .filter((sale:any) => sale.Year === selectedYear)
      .forEach((sale:any) => {
        const monthIndex = allMonths.indexOf(sale.Month);
        filledData[monthIndex] = sale.Total_Sales;
      });

      const maxNumber: number = Math.max(...filledData);
      const maxMonthIndex = filledData.indexOf(maxNumber);
      const maxMonth = allMonths[maxMonthIndex];

      const nonZeroValues = filledData.filter(value => value !== 0);

      const minNumber: number = Math.min(...nonZeroValues);
      const minMonthIndex = filledData.indexOf(minNumber);
      const minMonth = allMonths[minMonthIndex];

      const differenceValue = maxNumber - minNumber

      setMaxSaleMonth(maxMonth);
      setMaxSaleValue(maxNumber);

      setMinSaleMonth(minMonth);
      setMinSaleValue(minNumber);

      setDifferenceSale(differenceValue)

      setChartData({
        labels: allMonths,
        datasets: [{
          data: filledData,
          borderColor: '#3b82f6',
          backgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          pointBorderWith: 4,
          tension: 0.5
        }]
      });
    }
  }, [salesMonth, allMonths, selectedYear]);

  if (!salesMonth) {
    return <div></div>;
}

  if (error) {
    console.error('Error al obtener datos:', error);
    return <div>Error al cargar datos</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
    },
    scales:{
      x:{
        title:{
          display:false,      
        },
      },
      y:{
        min: 0,
        max: maxSaleValue,
        ticks: {
          stepSize: 200000,
          callback: (value: string) => numeral(value).format('0.0a')
        },
        grid: {
          tickBorderDash: [1000]
        },
      }
    }
  }

  const USDollar = new Intl.NumberFormat()

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="p-4 rounded border col-span-12 md:col-start-1 md:col-end-9 rounded-xl border bg-card text-card-foreground shadow p-4">
        <div className="flex justify-between items-center mb-5">
          <p className="text-gray-600 font-medium">Total Ventas {selectedYear}</p>
          <Select 
            defaultValue={selectedYear.toString()}
            onValueChange={(e) => setSelectedYear(Number(e))}
            >
            <SelectTrigger className="w-fit md:w-36">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index).map((year) => (
                <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
            ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full p-4">
          <Line className="w-full"  data={chartData}  />
        </div>
      </div>
      <div className="col-span-12 md:col-start-9 md:col-end-13 space-y-4">
        <div className="rounded-xl border bg-card text-card-foreground shadow space-y-4 border-l-1 border-r-1 border-b-1 border-t-8 border-t-emerald-500">
          <div className="flex items-center justify-between border-b p-4">
            <div className="w-10 h-10 flex items-center justify-center border rounded-lg">
              <Activity size={24} color="#6f6f6f" />
            </div>
            <p className="font-medium">Efectivo</p>
            <div className="h-10 px-2 flex items-center justify-center border rounded-lg">
              <p className="font-medium">{salesPayment?.Porcentaje_Efectivo}%</p>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <p className="font-semibold text-3xl text-center">${USDollar.format(salesPayment?.Ventas_Efectivo!)}</p>
            </div>
            <div>
              <p className="text-sm text-center text-neutral-700">Se han logrado recaudar un total de ${USDollar.format(salesPayment?.Ventas_Efectivo!)} en ventas en efectivo, llegando a un total del {salesPayment?.Porcentaje_Efectivo}% de las ventas en total</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border bg-card text-card-foreground shadow space-y-4 border-l-1 border-r-1 border-b-1 border-t-8 border-t-violet-500">
          <div className="flex items-center justify-between border-b p-4">
            <div className="w-10 h-10 flex items-center justify-center border rounded-lg">
              <Activity size={24} color="#6f6f6f" />
            </div>
            <p className="font-medium">Transferencia</p>
            <div className="h-10 px-2 flex items-center justify-center border rounded-lg">
              <p className="font-medium">{salesPayment?.Porcentaje_Transferencia}%</p>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <p className="font-semibold text-3xl text-center">${USDollar.format(salesPayment?.Ventas_Transferencia!)}</p>
            </div>
            <div>
              <p className="text-sm text-center text-neutral-700">Se han logrado recaudar un total de ${USDollar.format(salesPayment?.Ventas_Transferencia!)} en ventas por transferencia, llegando a un total del {salesPayment?.Porcentaje_Transferencia}% de las ventas en total</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}
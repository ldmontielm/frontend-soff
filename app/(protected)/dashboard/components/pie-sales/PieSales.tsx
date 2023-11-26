'use client'
import { Chart as ChartJS, LinearScale,PointElement, Tooltip, Legend, LineElement, Title, CategoryScale } from "chart.js";
import { Line } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image'
import SoffLogo from "@/public/soff.svg"

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
  const [maxSaleMonth, setMaxSaleMonth] = useState<string | null>(null)
  const [maxSaleValue, setMaxSaleValue] = useState<number | null>(null)
  const [minSaleMonth, setMinSaleMonth] = useState<string | null>(null)
  const [minSaleValue, setMinSaleValue] = useState<number | null>(null)
  const [differenceSale, setDifferenceSale] = useState<number | null>(null)
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [chartData, setChartData] = useState({
    labels:allMonths,
    datasets: [{
    label: "",
    data:Array(allMonths.length).fill(0),
    fill: true,
    borderColor: '#0453F4',
    backgroundColor: '#00000',
    tension: 0.1
    }]
  })

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
        label: "",
        data: filledData,
        fill: true,
        borderColor: '#0453F4',
        backgroundColor: '#0453F4',
        tension: 0.1
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
        position: 'top' as const,
      },
    },
    scales:{
      x:{
        title:{
          display:true,
          text: 'Meses'        
        },
      },
      y:{
        title:{
          display:true,
          text:'Ventas'
        }
      }
    }
  }

  

  return (
    <div className="w-full flex flex-col md:flex-row items-center py-4 gap-3 justify-between">
    <div className="p-3 gap-3 border rounded ">
      <div className="flex justify-between items-center">
        <div className="flex items-center ml-10 mt-2">
          <p className="text-gray-600 font-bold">Total Ventas {selectedYear}</p>
        </div>
        <div className="text-right col-span-12 flex items-center mr-6">
          <select
            id="yearSelector"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="text-blue-500 p-2 pl-4  w-[150px] mr-8 mt-4 border rounded"
          >
            {Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index).map((year) => (
              <option key={year} value={year} className="mr-4">
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="">
        <Line options={options} data={chartData}  />
      </div>
    </div>
    <div className="border rounded w-auto h-auto ml-2 p-2">
      <div className="flex justify-between items-center pt-4">
        <Image className="pl-4" src={SoffLogo} alt='logo soff'/>
        <p className="text-black font-bold text-sm pr-20">Aplicación SOFF</p>
      </div>
      {
        maxSaleValue === 0 ?(
          <p className="text-center font-bold p-5 w-full">No hay ventas registradas.</p>
        )
        :
        (
          <>
            <p className="text-blue-700 font-bold text-md pr-5 pt-7 pl-4">
              Interpretación gráfica
            </p>
            <p className="pl-4 pt-5 pr-2">Para el año {selectedYear} puedes ver que:</p>
            {
              minSaleMonth === maxSaleMonth && minSaleValue === maxSaleValue ? (
                <>
                  <p className="pl-4 pt-4 text-green-500 font-bold">Valor Alto</p>
                  <p className="pl-4 pt-4 text-black text-2xl font-bold">${maxSaleValue}</p>
                  <p className="pl-9 text-gray-500 font-bold">{maxSaleMonth}</p>
                  <p className="pl-9 pb-2">Alcanza su punto máximo.</p>
                </>
              )
              :
              (
                <>
                  <p className="pl-4 pt-4 text-red-500 font-bold">Valor bajo</p>
                  <p className="pl-4 pt-4 text-black text-2xl font-bold">${minSaleValue}</p>
                  <p className="pl-9 text-gray-500 font-bold">{minSaleMonth}</p>
                  <p className="pl-9 pr-1">Las ventas son relativamente bajas.</p>
                  <p className="pl-4 pt-4 text-green-500 font-bold">Valor Alto</p>
                  <p className="pl-4 pt-4 text-black text-2xl font-bold">${maxSaleValue}</p>
                  <p className="pl-9 text-gray-500 font-bold">{maxSaleMonth}</p>
                  <p className="pl-9">Alcanza su punto máximo.</p>
                  <p className="text-blue-700 text-1xl pl-4 font-bold pt-4 pb-2">Diferencia: ${differenceSale}</p>
                </>
              )
            } 
          </>
        )
      } 
    </div>
  </div>
  )
}
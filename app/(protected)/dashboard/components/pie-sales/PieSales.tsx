'use client'
import { Chart as ChartJS, LinearScale,PointElement, Tooltip, Legend, LineElement, Title, CategoryScale } from "chart.js";
import { Line } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'
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

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

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
};

  return (
  <div className="w-[950px] p-3 border rounded">
    <div className="flex justify-between items-center">
    <div className="text-right col-span-12">
        <select
          id="yearSelector"
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="text-blue-500 p-2 w-[150px] mr-8 mt-4 border rounded"
        >
          {Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center">
        <p className="text-gray-600 font-bold">Total Ventas {selectedYear}</p>
      </div>
      </div>
  <div className="w-[900px]">
    <Line options={options} data={chartData}  />
    </div>
  </div>
  )
}
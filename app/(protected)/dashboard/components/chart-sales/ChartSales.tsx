'use client'
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);
import { Pie,Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'
import React, { useEffect, useState } from 'react';



interface Sale {
    Año: number,
    Mes: string,
    Ventas_Totales: number,
    Ventas_Efectivo: number,
    Ventas_Transferencia: number,
    Porcentaje_Efectivo: number,
    Porcentaje_Transferencia: number
}

export default function ChartSales()  {
    const {data: salesMonth, error } = useSWR(`${RoutesApi.DASHBOARD}/grafic_payment`) 
    if (!salesMonth) {
        return <div>Cargando Gráficas</div>;
    }

    const cashSales = salesMonth.map((item: Sale) => item.Ventas_Efectivo);
    const transferSales = salesMonth.map((item: Sale) => item.Ventas_Transferencia);
    const porcash = salesMonth.map((item: Sale) => item.Porcentaje_Efectivo);
    const portransfer = salesMonth.map((item: Sale) => item.Porcentaje_Transferencia);
    const total = salesMonth.map((item: Sale) => item.Ventas_Totales);

    const totales = parseFloat(total)
    const formatted = new Intl.NumberFormat("en-US", {
      style: 'currency',
      currency: "USD",
      maximumFractionDigits: 0
    }).format(totales)

    const chartData = {
        labels: ['Ventas por Efectivo', 'Ventas por Transferencia'],
        datasets: [{
            data: [cashSales, transferSales],
            backgroundColor: ['green', 'yellow'],
            hoverBackgroundColor: ['#24872B', '#FFF333']
        }]
    };


    const options = {
        plugins: {
            datalabels: {
                formatter: (value:number, ctx:any) => {
                    if (ctx.dataIndex === 0) {
                       return `${porcash}%`;
                    } else if (ctx.dataIndex === 1) {
                       return `${portransfer}%`;
                    }
                },
                color: 'black',
                font: {
                    size: 20,
                },
            }
        },
        centerText: {
            display: true,
            text: `${formatted}`,
        },
     };

     const plugins = [
        {
            id: 'centerText',
            beforeDraw: function (chart:any) {
                const width = chart.width;
                const height = chart.height;
                const ctx = chart.ctx;
                ctx.restore();
                const fontSize = (height / 220).toFixed(2);
                ctx.font = `${fontSize}em sans-serif`; 
                ctx.textBaseline = "top";
                const text = chart.config.options.centerText.text;
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2;
                ctx.fillStyle = 'black';
                ctx.fillText(text, textX, textY);
                ctx.save();
            },
        },
      ];
      
     

    return (
        <div style={{width: "450px", height: "450px"}}> 
            <Doughnut data={chartData} options={options} plugins={plugins}/>
        </div>
    ); 
    };


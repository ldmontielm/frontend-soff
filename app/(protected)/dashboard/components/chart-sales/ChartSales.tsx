'use client'
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'
import React, { useEffect, useState } from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import { AnyNaptrRecord } from 'dns';

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
        return <div>Loading...</div>;
    }

    const cashSales = salesMonth.map((item: Sale) => item.Ventas_Efectivo);
    const transferSales = salesMonth.map((item: Sale) => item.Ventas_Transferencia);
    const porcash = salesMonth.map((item: Sale) => item.Porcentaje_Efectivo);
    const portransfer = salesMonth.map((item: Sale) => item.Porcentaje_Transferencia);
    const total = salesMonth.map((item: Sale) => item.Ventas_Totales);

    const chartData = {
        labels: ['Ventas por Efectivo', 'Ventas por Transferencia'],
        datasets: [{
            data: [cashSales, transferSales],
            backgroundColor: ['#FF6384', '#36A2EB'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB']
        }]
    };
    // const options = {
    //     plugins: {
    //         datalabels: {
    //             formatter: (value:number, ctx:any) => {
    //                return `${porcash}%, ${portransfer}%`;
    //             },
    //             color: '#fff',
    //         },
    //         title: {
    //             display: true,
    //             text: `Total Ventas: ${total}`
    //         }
    //     }
    // };
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
                color: '#fff',
            },
            title: {
                display: true,
                text: `Total Ventas: ${total}`
            }
        }
     };
     

    return (
        <div style={{width: "450px", height: "450px"}}> 
            <Pie data={chartData} options={options}/>
        </div>
    ); 
    };



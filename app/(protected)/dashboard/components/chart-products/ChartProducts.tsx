'use client'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'
import React, { useEffect, useState } from 'react';

Chart.register(ArcElement);
Chart.register(ChartDataLabels);

interface Sale {
    Producto: string,
    Ventas_Totales: number,
}

    export default function ChartSales2()  {
    const { data: topProducts, error } = useSWR(`${RoutesApi.DASHBOARD}/top_products`);
    if (!topProducts) {
        return <div>Loading...</div>;
    }

    const productNames = topProducts.map((item: Sale) => item.Producto);
    const productSales = topProducts.map((item: Sale) => item.Ventas_Totales);

const chartData = {
    labels: productNames,
    datasets: [{
        data: productSales,
        backgroundColor: ['#6096B4', '#93BFCF', '#BDCDD6']
    }]
};

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Top 3 Productos Más Vendidos',
            color:'black',
            font: {
                size:24
            },
            padding:{
                top:30,
                bottom:30
            },
            responsive:true,
            animation:{
                animateScale: true,
            }
        },
        datalabels: {
            color: 'black',
            font: {
                size: 20,
            },
        }
    }
};

return (
    <div style={{width: "450px", height: "450px"}}>
        <Bar data={chartData} options={options} />
    </div>
);
}
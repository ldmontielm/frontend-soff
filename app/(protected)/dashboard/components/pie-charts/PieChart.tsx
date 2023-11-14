// Importa las bibliotecas necesarias
import React from 'react';
import { Pie } from 'react-chartjs-2';
import useSWR from 'swr'
import { RoutesApi } from '@/models/routes.models'

const {data:sales} = useSWR(`${RoutesApi.SALES}`)
let salesCash = [];
let salestransfer = [];

if (Array.isArray(sales)) {
  sales.map((sale) => {
    // Asumo que hay un campo "metodoPago" en cada venta
    const payment_method = sale.payment_method;

    if (payment_method === 'Efectivo') {
        salesCash.push(sale);
    } else if (payment_method === 'Transferencia') {
        salestransfer.push(sale);
    }

    // Agrega cualquier otra lógica que necesites aquí
  });
}
// Define los datos para la gráfica de torta
const data = {
  labels: ['Efectivo', 'Transferencia'],
  datasets: [
    {
      data: [salesCash.length, salestransfer.length], // Datos para cada sección de la torta
      backgroundColor: ['#FF6384', '#36A2EB'], // Colores de cada sección
      hoverBackgroundColor: ['#FF6384', '#36A2EB'], // Colores al pasar el ratón sobre cada sección
    },
  ],
};

// Define las opciones de la gráfica
const options = {
  responsive: true,
  maintainAspectRatio: false,
};

// Crea el componente de la gráfica de torta
const PieChart = () => {
  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;

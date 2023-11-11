'use client'
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Ventas mensuales',
      },
    },
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export default function BarSales() {
    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.number.int({ min: 0, max: 700 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.number.int({ min: 0, max: 600 })),
            backgroundColor: 'rgba(222++, 162, 235, 0.5)',
          },
        ],
      };
    return (
        <div>
            <Bar options={options} data={data} />
        </div>
    );
}

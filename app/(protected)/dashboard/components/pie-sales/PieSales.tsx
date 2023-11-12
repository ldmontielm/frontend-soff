'use client'
import { Chart as ChartJS, LinearScale,PointElement,ArcElement, Tooltip, Legend, LineElement, Title, CategoryScale } from "chart.js";
import { Line } from 'react-chartjs-2';
import {months} from '@/lib/chart-utils'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = months({count: 7});

const data = {
  labels: labels,
  datasets: [{
    label: 'Ventas',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: '#6d28d9',
    tension: 0.1
  }]
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

export default function PieSales() {
  return <Line className="w-full" options={options} data={data}/>
}

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {  
  Bar,    
} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ChartDataLabels,
  Title,
  Tooltip,
  Legend
);

export default function  ChartComp(props) {

  const options = {
    plugins: {
      datalabels: {
        display: true,        
      },
      title: {
        display: true,
        text: '- Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels= props.data.map(c => c.label);

  const data = {
    labels,
    datasets: [
      {
        label: 'Commercial Flights',
        data: props.data.map(c => c.commercialCount),
        backgroundColor: '#58508d',
        datalabels: {
          color: 'white'
        },
      },
      {
        label: 'General Aviation',
        data: props.data.map(c => c.generalCount),
        backgroundColor: '#ff6361',
        datalabels: {
          color: 'white'
        },
      },
    ],
    tooltips: {
  
    },
  };

  
  return <Bar options={options} data={data} />;
}

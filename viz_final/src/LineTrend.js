import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import line_data from './line_data.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
};



const LineTrend = ({trends,trendNumber}) => {
  const labels = line_data[trends[trendNumber]]['line']['google']['labels'];
  const datas = {
    labels,
    datasets: [
      {
        label: 'Google Trends ((highest-lowest)/100)',
        data: line_data[trends[trendNumber]]['line']['google']['val'],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Youtube Upload Trends (video)',
        data: line_data[trends[trendNumber]]['line']['youtube']['val'],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (<Line options={options} data={datas} />);
}

export default LineTrend;
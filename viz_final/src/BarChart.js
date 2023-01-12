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
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false,
    //   position: 'top',
    },
    title: {
    //   display: true,
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [1, 2, 3, 4, 5, 6, 7],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: [1, 2, 3, 4, 5, 6, 7],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

const BarChart = ({labels, data_, color}) => {
    // const label = labels;
    console.log('label', labels,'data', data_)
    const data = {
    labels,
    datasets: [
        {
        label: 'quantity',
        data: data_,
        backgroundColor: color
        }
    ],
    // options:options
    };
    return <Bar data={data} 
              //   width={50}
              //   height={50}
              options={options}
            //   options={{ maintainAspectRatio: false }}
            />;
  }
  export default BarChart;

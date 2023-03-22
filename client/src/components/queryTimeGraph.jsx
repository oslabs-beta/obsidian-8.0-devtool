import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2';

const QueryTimeGraph = () => {
  //dummy data for testing
  const fake = [
    {name: 'A', time: 20},
    {name: 'B', time: 12},
    {name: 'C', time: 10},
    {name: 'D', time: 18},
    {name: 'E', time: 30},
    {name: 'F', time: 16},
    {name: 'G', time: 22},
  ];

  //linearscale - needed for the y-axis of time since this is numerical
  //categoryscale - needed for the x-axis of name since this is "custom"
  // to learn more about importing and registering elements, see https://react-chartjs-2.js.org/docs/migration-to-v4/#tree-shaking
  ChartJS.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Query Time Graph'
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Time (in milliseconds)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Query'
        }
      }
    }
  };
  
  const data = {
    labels: fake.map(el => el.name),
    datasets: [
      {
        label: 'Fake Data',
        data: fake.map(el => el.time)
        //backgroundColor: 'rgba()'
      }
    ]
  }

  return (
    <div>
      <Bar data={data} options={options}/>
    </div>
  )
};

export default QueryTimeGraph;
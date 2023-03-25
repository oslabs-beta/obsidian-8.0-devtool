import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { useQueryContext } from '../hooks/useQueryContext';

const QueryTimeGraph = () => {
  const { state } = useQueryContext();
  console.log('state.queryMetrics in queryTimeGraph is ', state.queryMetrics)

  //linearscale - needed for the y-axis of time since this is numerical
  //categoryscale - needed for the x-axis of name since this is "custom"
  // to learn more about importing and registering elements, see https://react-chartjs-2.js.org/docs/migration-to-v4/#tree-shaking
  ChartJS.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend);
  
  const options: ChartOptions<'bar'> = {
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
  
  const data: ChartData<'bar'> = {
    labels: state.queryMetrics.map((el, index) => index + 1),
    datasets: [
      {
        label: 'Queries',
        data: state.queryMetrics.map(el => el.time)
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
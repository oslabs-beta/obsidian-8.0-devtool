import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  PointElement,
  LineElement
} from 'chart.js'
import { getRelativePosition } from 'chart.js/helpers'
import { Line } from 'react-chartjs-2';
import { useQueryContext } from '../hooks/useQueryContext';

const QueryLogGraph = (props: any) => {
  const { state, dispatch } = useQueryContext(); 
  ChartJS.register(LinearScale, CategoryScale, PointElement, Tooltip, LineElement, Legend);

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    //events: ['click'],
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Query Log'
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: 'Time (in ms)',
        },
        ticks: {
          stepSize: 10
        }
      },
      x: {
        title: {
          display: true,
          text: 'Query'
        },
      }
    },
    onClick: (e, element) => {
      console.log('element is', element);
      const data = state.queryMetrics.filter(el => el.mutation ? el.mutation : !el.mutation && el.hit ? el.hit : !el.hit);
      let final = data[element[0].index];
      console.log('this is data', data);
      console.log('this is final', final);
      dispatch({type: 'SET_OPEN', payload: final.date})
    //   const canvasPosition = getRelativePosition(e, QueryLogGraph);
    //   console.log('canvas position is', canvasPosition);
    //   console.log('this is the click event', e);
    }
  }

  const data: ChartData<'line'> = {
    labels: state.queryMetrics.map((el, index) => index + 1),
    datasets: [
      {
        label: 'Hit Time',
        data: state.queryMetrics.filter(el => el.hit && !el.mutation).map(el => el.time),
        backgroundColor: 'rgb(25, 201, 16)',
        borderColor: 'rgba(25, 201, 16, 0.4)',
        pointBackgroundColor: 'rgb(25, 201, 16)',
        pointRadius: state.hitSize,
        pointHoverRadius: 25
      },
      {
        label: 'Miss Time',
        data: state.queryMetrics.filter(el => !el.hit && !el.mutation).map(el => el.time),
        backgroundColor: 'rgb(41, 82, 217)',
        borderColor: 'rgba(41, 82, 217, 0.4)',
        pointBackgroundColor: 'rgb(41, 82, 217)',
        pointRadius: state.missSize,
        pointHoverRadius: 20
      },
      {
        label: 'Mutation Time',
        data: state.queryMetrics.filter(el => el.mutation).map(el => el.time),
        backgroundColor: 'rgb(160, 20, 181)',
        borderColor: 'rgba(160, 20, 181, 0.4)',
        pointBackgroundColor: 'rgb(160, 20, 181)',
        pointRadius: state.mutationSize,
        pointHoverRadius: 20
      }
    ]
  }

  return(
    <div className='line-chart'>
      <Line data={data} options={options} />
    </div>
  )
}

export default QueryLogGraph;
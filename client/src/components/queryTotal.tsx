import React from 'react'
import { useQueryContext } from '../hooks/useQueryContext';


const QueryTotal = () => {
  const { state } = useQueryContext();
  return (
    <div id='queryTotalContainer'>
      <span className='label-text'>TOTAL QUERIES</span>
      <span className='value-text'>{state.totalQueries}</span>
    </div>
  )
};


export default QueryTotal;
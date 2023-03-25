import React from 'react';
import { useQueryContext } from '../hooks/useQueryContext';

const QueryHitRate = () => {
  const { state } = useQueryContext();
  return (
    <div>
      This is the QueryHitRate component.
      Query Hit Rate is: 
      {state.totalQueries === 0 ? '0.00%' : ((state.totalHits / state.totalQueries) * 100).toFixed(2) + '%'} 
    </div>
  )
};


export default QueryHitRate;
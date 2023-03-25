import React from 'react'
import { useQueryContext } from '../hooks/useQueryContext';


const QueryTotal = () => {
  const { state } = useQueryContext();
  return (
    <div>
      This is the QueryTotal component.
      Query Total: {state.totalQueries}
    </div>
  )
};


export default QueryTotal;
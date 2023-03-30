import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QueryLogGraph from '../components/queryLogGraph';
import ReverseList from '../components/reverseList';

const QueryLog = () => {
  
  return(
    <div className='querylog'>
      {/* query log time graph */}
      <QueryLogGraph />
      {/* reverse chronological list */}
      <ReverseList />
    </div>
  )
}

export default QueryLog;
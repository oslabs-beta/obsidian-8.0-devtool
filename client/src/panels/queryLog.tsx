import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QueryLogGraph from '../components/queryLogGraph';
import ReverseList from '../components/reverseList';
import ListItem from '../components/listItem';
import { DisplayRouteType } from '../types';
import { useQueryContext } from '../hooks/useQueryContext';

const QueryLog = () => {
  const { state } = useQueryContext();

  const [display, setDisplay] = useState<string>('all')

  const displayRoute: DisplayRouteType = {
    all: <ReverseList />,
    selected: <ListItem data={state.open}/>
  }

  const handleClick = (e: React.SyntheticEvent): void  => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    setDisplay(target.id)
  }
  
  return(
    <div className='querylog'>
      {/* query log time graph */}
      <QueryLogGraph setDisplay={setDisplay}/>
      {/* reverse chronological list */}
      <div>
        <button id='all' onClick={handleClick} className={`display ${display === 'all' ? 'show' : ''}`}>All</button>
        <button id='selected' onClick={handleClick} className={`display ${display === 'selected' ? 'show' : ''}`}>Selected</button>
      </div>
      {display && displayRoute[display]}
    </div>
  )
}

export default QueryLog;
import React, { useState } from 'react'
import { useQueryContext } from '../hooks/useQueryContext';
import ListItem from './listItem';

const ReverseList = (props: any) => {
  const { state } = useQueryContext();
  
  const list: Array<JSX.Element> = [];
  for(let i: number = 0; i < state.queryMetrics.length; i++){
    list.push(<ListItem data={state.queryMetrics[i]}/>)
  }
//   console.log('this is list', list);
//   if(state.open){
//     console.log('open is', state.open);
//     const findData = (element: any) => element.date === state.open;
//     const index = state.queryMetrics.findIndex(findData);
//     console.log('index is supposed to be', index);
//     expand.splice(index, 1, true);
//     console.log('spliced list is', list);
//   }

  return(
    <div>
      {list.length && list.reverse()}
    </div>
  )
}

export default ReverseList;
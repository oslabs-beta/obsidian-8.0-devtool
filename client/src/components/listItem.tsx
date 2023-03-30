import React, { useState } from 'react';
import { ListItemType } from '../types';
import { useQueryContext } from '../hooks/useQueryContext';

const ListItem = (props: ListItemType) => {
  const { state } = useQueryContext();

  const [expand, setExpand] = useState<boolean>(false);

  const handleClick = () => {
    setExpand(!expand);
  }

  return(
    <div onClick={handleClick} className={`listItem ${props.data.hit ? 'hit' : 'miss'}`}>
      {expand ? 
        <div className={`innerListItem`}>
          <span>Date: {props.data.date}</span>
          <span>Query Time: {props.data.time}ms</span>
          <span>Data: {props.data.query}</span>
        </div> 
        :
        <div className={`innerListItem`}>
          <span>{props.data.date}</span>
          <span>{props.data.time}ms</span>
        </div>
      }
    </div>
  )
}

export default ListItem;
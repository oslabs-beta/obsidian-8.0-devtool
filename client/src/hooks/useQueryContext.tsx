import React, { useContext } from 'react';
import { QueryContext } from '../contexts/queryContext';

export const useQueryContext = () => {
  const context = useContext(QueryContext);

  if(!context){
    throw Error('useQueryContext should be used in QueryContext Provider');
  };

  return context;
}
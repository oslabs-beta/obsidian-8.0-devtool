import React from "react";
import { createContext, useReducer, Dispatch } from "react";
import { action } from '../types';

type State = {
  totalQueries: number,
  totalHits: number,
  queryMetrics: Array<{name: number, time: number, hit: boolean}>,
};


export const QueryContext = createContext<{state: State, dispatch: Dispatch<action>}>({
  dispatch: () => null,
  state: {
    totalQueries: 0,
    totalHits: 0,
    queryMetrics: []
  }
});

const queryMetricReducer = (state: State, action: action): State => {
  switch(action.type) {
    case 'ADD_HIT_QUERY':
      return {
        totalQueries: state.totalQueries + 1,
        totalHits: state.totalHits + 1,
        queryMetrics: [...state.queryMetrics, action.payload]
      };

    case 'ADD_MISSED_QUERY':
      return {
        totalQueries: state.totalQueries + 1,
        totalHits: state.totalHits,
        queryMetrics: [...state.queryMetrics, action.payload]
      };

    default:
      return state;
  };
};

export const QueryContextProvider = ({ children }: {children: JSX.Element}) => {
  const initial: State = {
    totalQueries: 0,
    totalHits: 0,
    queryMetrics: []
  };

  const [ state, dispatch ] = useReducer(queryMetricReducer, initial);

  return (
    <QueryContext.Provider value={{state, dispatch}}>
      {children}
    </QueryContext.Provider>
  )
};
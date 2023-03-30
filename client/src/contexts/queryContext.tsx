import React from "react";
import { createContext, useReducer, Dispatch } from "react";
import { action } from '../types';

const DEFAULT_POINTER_SIZE: number = 8; 

type State = {
  totalQueries: number,
  totalHits: number,
  queryMetrics: Array<{date: number, time: number, hit: boolean, query: string, mutation: boolean}>,
  hitSize: Array<number>,
  missSize: Array<number>,
  mutationSize: Array<number>,
  open: string
};


export const QueryContext = createContext<{state: State, dispatch: Dispatch<action>}>({
  dispatch: () => null,
  state: {
    totalQueries: 0,
    totalHits: 0,
    queryMetrics: [],
    hitSize: [],
    missSize: [],
    mutationSize: [],
    open: ''
  }
});

const queryMetricReducer = (state: State, action: action): State => {
  switch(action.type) {
    case 'ADD_HIT_QUERY':
      return {
        totalQueries: state.totalQueries + 1,
        totalHits: state.totalHits + 1,
        queryMetrics: [...state.queryMetrics, action.payload],
        hitSize: [...state.hitSize, DEFAULT_POINTER_SIZE],
        missSize: [...state.missSize],
        mutationSize: [...state.mutationSize],
        open: state.open
      };

    case 'ADD_MISSED_QUERY':
      return {
        totalQueries: state.totalQueries + 1,
        totalHits: state.totalHits,
        queryMetrics: [...state.queryMetrics, action.payload],
        hitSize: [...state.hitSize],
        missSize: [...state.missSize, DEFAULT_POINTER_SIZE],
        mutationSize: [...state.mutationSize],
        open: state.open
      };
    
    case 'SET_OPEN':
      return {
        totalQueries: state.totalQueries,
        totalHits: state.totalHits,
        queryMetrics: [...state.queryMetrics],
        hitSize: [...state.hitSize],
        missSize: [...state.missSize],
        mutationSize: [...state.mutationSize],
        open: action.payload
      }

    default:
      return state;
  };
};

export const QueryContextProvider = ({ children }: {children: JSX.Element}) => {
  const initial: State = {
    totalQueries: 0,
    totalHits: 0,
    queryMetrics: [],
    hitSize: [],
    missSize: [],
    mutationSize: [],
    open: ''
  };

  const [ state, dispatch ] = useReducer(queryMetricReducer, initial);

  return (
    <QueryContext.Provider value={{state, dispatch}}>
      {children}
    </QueryContext.Provider>
  )
};
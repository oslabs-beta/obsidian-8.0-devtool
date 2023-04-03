import React from "react";
import { createContext, useReducer, Dispatch } from "react";
import { action } from '../types';
import { State } from "../types";

// sets a default pointer size for each point in the log graph
// goal is that if a query log is clicked from the list,
// the corresponding point in the graph will become bigger - not yet implemented but setup for state is done
const DEFAULT_POINTER_SIZE: number = 8; 

// custom context for easier state management
export const QueryContext = createContext<{state: State, dispatch: Dispatch<action>}>({
  dispatch: () => null,
  state: {
    totalQueries: 0,
    totalHits: 0,
    queryMetrics: [],
    hitSize: [],
    missSize: [],
    mutationSize: [],
    open: {}
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
    open: {}
  };

  const [ state, dispatch ] = useReducer(queryMetricReducer, initial);

  return (
    <QueryContext.Provider value={{state, dispatch}}>
      {children}
    </QueryContext.Provider>
  )
};
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QueryTimeGraph from '../components/queryTimeGraph';
import QueryHitRate from '../components/queryHitRate';
import QueryTotal from '../components/queryTotal';
import { dashboardProps } from '../types';

export default function Dashboard(props: dashboardProps) {
  return(
    <div id='dashboardContainer'>
      {/* <h1>This is the dashboard!</h1> */}
      <div id='dashboardSummary'>
        <div id='algocap'>
          {/* error for eslint here is ok, 
          we want to uppercase the algo string, but this is showing error 
          because we have multiple types defined for props; will not throw error in build*/}
          {props.algo && <span className='label-text'>ALGORITHM: {props.algo.toUpperCase()}</span>}
          {props.capacity && <span className='label-text'>TOTAL CAPACITY: {props.capacity}</span>}
        </div>
        <div id='hitTotalContainer'>
          <QueryHitRate />
          <QueryTotal />
        </div>
      </div>
      <div id="queryTimeGraph">
        <QueryTimeGraph />
      </div>
    </div>
  )
}
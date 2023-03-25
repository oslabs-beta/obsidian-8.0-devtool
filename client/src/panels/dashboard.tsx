import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QueryTimeGraph from '../components/queryTimeGraph';
import QueryHitRate from '../components/queryHitRate';
import QueryTotal from '../components/queryTotal';
import { dashboardProps } from '../types';

export default function Dashboard(props: dashboardProps) {
  return(
    <div>
      <h1>This is the dashboard!</h1>
      <QueryHitRate />
      <QueryTotal />
      <div id="queryTimeGraph">
        <QueryTimeGraph />
      </div>
    </div>
  )
}
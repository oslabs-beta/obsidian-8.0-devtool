import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QueryTimeGraph from '../components/queryTimeGraph';
import QueryHitRate from '../components/queryHitRate';
import QueryTotal from '../components/queryTotal';

export default function Dashboard(props) {
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
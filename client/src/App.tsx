import { useState, useEffect } from 'react';
import './stylesheets/App.css';
import Testpanel from './panels/testpanel.jsx';
import Dashboard from './panels/dashboard.jsx';
import Navbar from './components/Navbar';
import { Route, DOMMessage } from './types';
import { useQueryContext } from './hooks/useQueryContext';

//browser router and routes don't work - no urls in devtools


function App(): JSX.Element {
  // const [count, setCount] = useState(0)
  const { dispatch } = useQueryContext();
  const routes: Route = {
    'dashboard': <Dashboard />,
    'testpanel': <Testpanel />
  };

  // put chrome.runtime.connect in useEffect
  // save the connect in a variable
  // add listener on the port variable for onMessage

  // const [currentlyOpen, setCurrentlyOpen]: [keyof Route, React.Dispatch<React.SetStateAction<keyof Route>>] = useState('dashboard');
  const [currentlyOpen, setCurrentlyOpen] = useState<keyof Route>('dashboard');

  useEffect(() => {
    console.log('inside extensions App.jsx useEffect');
    const port: chrome.runtime.Port = chrome.runtime.connect();
    port.onMessage.addListener((message: DOMMessage, port: chrome.runtime.Port) => {
      // sender: chrome.runtime.MessageSender,
      // sendResponse: (response: DOMMessage) => void) => {
      console.log('in port listener!');
      console.log('message is in APP!!!', message);
      // dispatch to reducer
      // NEED TO HAVE LOGIC TO SPECIFIY CASE
      let situation: string;
      message.hit === true ? situation = 'ADD_HIT_QUERY' : situation = 'ADD_MISSED_QUERY';
      const metrics = {
        time: message.time,
        name: message.name
      }
      dispatch({type: situation, payload: metrics});
      console.log('this is metrics in App as payload', metrics)
    });
  }, [])

  return (
    <div>
      <Navbar setCurrentlyOpen={setCurrentlyOpen} />
      {currentlyOpen && routes[currentlyOpen]}
    </div>
  )
}

export default App

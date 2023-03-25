import { useState, useEffect } from 'react';
import './stylesheets/App.css';
import Testpanel from './panels/testpanel.jsx';
import Dashboard from './panels/dashboard.jsx';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import Navbar from './components/Navbar';

//browser router and routes don't work - no urls in devtools

function App() {
  // const [count, setCount] = useState(0)
  const routes = {
    "dashboard": <Dashboard />,
    "testpanel": <Testpanel />
  };

  // put chrome.runtime.connect in useEffect
  // save the connect in a variable
  // add listener on the port variable for onMessage

  const [currentlyOpen, setCurrentlyOpen] = useState('dashboard');

  useEffect(() => {
    console.log('inside extensions App.jsx useEffect');
    const port = chrome.runtime.connect();
    port.onMessage.addListener((message, sender, sendResponse)=> {
      console.log('in port listener!');
      console.log('message is in APP!!!', message);
    });
  }, [])

  // return (
    // <div className="App">
    //   <BrowserRouter>
    //     <div className='pages'>
    //       <Navbar />
    //       <h1>Hello</h1>
    //       <Routes>
    //         <Route path='/' element = {<dashboard />}></Route>
    //         <Route path='/test' element={<testpanel />}></Route>
    //       </Routes>
    //     </div>
    //   </BrowserRouter>
    // </div>
  // )
  return (
    <div>
      <Navbar setCurrentlyOpen={setCurrentlyOpen} />
      {currentlyOpen && routes[currentlyOpen]}
    </div>
  )
}

export default App

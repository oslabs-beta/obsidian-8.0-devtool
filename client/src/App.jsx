import { useState } from 'react';
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

  // const routeResult = useRoutes(routes);

  const [currentlyOpen, setCurrentlyOpen] = useState('dashboard');

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

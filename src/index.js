import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, createBrowserRouter , createRoutesFromElements, RouterProvider, BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx'
import Coins from './components/Coins/Coins.jsx'
import Exchanges from './components/Exchanges/Exchanges.jsx'

const router = createBrowserRouter(
   createRoutesFromElements(
    <BrowserRouter basename="/cryptocurrency">
    <Route path= '/' element= {<Layout />}>
      <Route path = '' element={<Home />}/>
      <Route path="Coins/" element={<Coins />}/>
      <Route path="Exchanges/" element={<Exchanges />}/>

    </Route>
    </BrowserRouter>
   )
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);


reportWebVitals();

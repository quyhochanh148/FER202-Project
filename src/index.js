import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Login from './compoment/login';
import Home from './compoment/Home';
import Details from './compoment/Detail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Login/>
   {/* <Home/> */}
   {/* <Details/> */}
  </React.StrictMode>
);

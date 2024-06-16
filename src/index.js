import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Login from './compoment/login';
import Home from './compoment/Home';
import Details from './compoment/Detail';
import Admin from './compoment/admin';
import Admin1 from './compoment/admin1';
import ChangePasswordPage from './compoment/changpass';
import ForgotPasswordPage from './compoment/forgotpass';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Login/> */}
   {/* <Home/> */}
   <Details/>
   {/* <Admin/> */}
   {/* <Admin1/> */}
   {/* <ChangePasswordPage/> */}
   {/* <ForgotPasswordPage/> */}
  </React.StrictMode>
);

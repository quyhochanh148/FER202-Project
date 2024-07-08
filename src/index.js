import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Login from './compoment/login';
import Home from './compoment/Home';
import Details from './compoment/Detail';
import ChangePasswordPage from './compoment/changpass';
import ForgotPasswordPage from './compoment/forgotpass';
import Admin from './compoment/admin';
import Admin1 from './compoment/admin1';
import Watching from './compoment/Watching';
import Search from './compoment/Search';
import SignUp from './compoment/signup';
import DetailUser from './compoment/detailsadmin';
import UpdateUser from './compoment/updatea';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Login/>
   <SignUp/>
   <Home/>
   <Details/>
   <ChangePasswordPage/>
   <ForgotPasswordPage/>
   <Admin/>
   <Admin1/>
   <Watching/>
   <Search/>
   <DetailUser/>
   <UpdateUser/>
   
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import '@fontsource/roboto/300.css'
import "./pages/style.css";
import Pagefooter from './modules/shares/Pagefooter';
import Pagenavbar from './modules/shares/Pagenavbar';
import Landingpage from './modules/dashboard/Landingpage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Aboutpage from './modules/dashboard/Aboutpage';
import Contactuspage from './modules/dashboard/Contactuspage';
import Formpage from './modules/dashboard/Formpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Pagenavbar/>
      <Routes>
        <Route path='' element={<Landingpage/>}></Route>
        <Route path='about' element={<Aboutpage/>}></Route>
        <Route path='contact' element={<Contactuspage/>}></Route>
        <Route path='login' element={<Formpage/>}></Route>
      </Routes>
  <Pagefooter/>
  </BrowserRouter>
  </React.StrictMode>
);



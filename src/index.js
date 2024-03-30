import React from 'react';
import ReactDOM from 'react-dom/client';
import Myhome from   './pages/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import '@fontsource/roboto/300.css'
import "./pages/style.css";
import Bspage from './pages/Bspage';
import Rbspage from './pages/Rbspage';
import Umpage from './pages/Umpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myhome></Myhome>
    <Bspage></Bspage>
    <Rbspage></Rbspage>
    <Umpage></Umpage>

  </React.StrictMode>
);



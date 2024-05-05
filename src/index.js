import React, { Suspense,lazy } from 'react';
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
import Myforms from './modules/dashboard/Myforms';
import Mymain from './modules/dashboard/Mymain';
import Products from './modules/dashboard/Products';
import Productdetails from './modules/dashboard/Productdetails';
import Mygraph from './modules/dashboard/Mygraph';
import Myerrorpage from './modules/shares/Myerrorpage';
import Courselanding from './modules/dashboard/courses/Courselanding';
import Coursedefaultpage from './modules/dashboard/courses/Coursedefaultpage';
import Mongodbpage from './modules/dashboard/courses/Mongodbpage';
import Reactpage from './modules/dashboard/courses/Reactpage';
import Expressjspage from './modules/dashboard/courses/Expressjspage';
import { Provider } from 'react-redux';
import { jsstore } from './modules/redux/mystore';
import Reduxpage from './modules/redux/Reduxpage';
// import Mylazypage from './modules/dashboard/Mylazypage';
const Mylazypage = lazy(()=> import('./modules/dashboard/Mylazypage'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={jsstore}>
    <BrowserRouter>
    <Pagenavbar/>
      <Routes>
        <Route path='' element={<Landingpage/>}></Route>
        <Route path='about' element={<Aboutpage/>}></Route>
        <Route path='myapi' element={<Contactuspage/>}></Route>
        <Route path='login' element={<Formpage/>}></Route>
        <Route path='myforms' element={<Myforms/>}></Route>
        <Route path='mainpage' element ={<Mymain/>}/>
        <Route path='parampage' element ={<Products/>}/>
        <Route path='parampage/details/:id' element ={<Productdetails/>}/>
          <Route path='courselist' element={<Courselanding/>}>
            <Route path='' element={<Coursedefaultpage/>}/>
            <Route path='mainpage' element={<Coursedefaultpage/>}/>
              <Route path='mongodb' element={<Mongodbpage/>}/>
              <Route path='reactjs' element={<Reactpage/>}/>
              <Route path='expressjs' element={<Expressjspage/>}/>
              <Route path='*' element={<Myerrorpage/>}/>
          </Route>
          <Route path='reduxpage' element ={<Reduxpage/>}/>
        <Route path='graph' element={<Mygraph/>}/>
        <Route path='lazyloading' element={
        <Suspense fallback={<h1 style={{marginTop:'100px',backgroundColor:'red',fontSize:'50px'}}>Loding page here...</h1>}>
            <Mylazypage/>
        </Suspense>}/>
        <Route path='*' element={<Myerrorpage/>}/>

      </Routes>
  <Pagefooter/>
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
);



import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Pagenavbar() {
  const [err1,seterr1]=useState("abc");
const abc = ()=>{
  seterr1(localStorage.getItem("errorkey"));
    console.log(localStorage.getItem("errorkey"));
}

  useEffect(()=>{
    abc();

  },[])

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="myapi">Apis</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="login">Registor</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="myforms">forms</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="mainpage">props</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="parampage">paramrout</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="graph">Graphs</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="courselist">Course</Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Pagenavbar
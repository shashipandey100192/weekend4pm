

import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Myjsonfile() {

const [adata,setdata]=useState([])

const loadalldata = ()=>{
    axios.get('http://localhost:3333/students').then((d)=>{
        console.log(d);
        setdata(d.data)
    })
}

useEffect(()=>{
    loadalldata()
},[]);



  return (
    <div className='container border custop'>
        <div className='row'>
            <div className='col-12'>
                <h1>List of Products <Link to={'/addnewrecord'} className='btn btn-primary'>Add New Student</Link></h1>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Email Id</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {adata.map((d)=>{
                           return(
                            <tr key={d.id}>
                            <th scope="row">{d.id}</th>
                            <td>{d.name}</td>
                            <td>{d.phone}</td>
                            <td>{d.email}</td>
                            <td>
                                <Link to={d.id} className='btn btn-primary btn-sm'>view</Link>
                                <Link to="view" className='btn btn-warning btn-sm ms-2'>edit</Link>
                                <Link to="view" className='btn btn-danger btn-sm ms-2'>del</Link>
                            </td>
                            </tr>
                           ) 

                       })}
                    </tbody>
                    </table>
            </div>
        </div>
    </div>
  )
}

export default Myjsonfile
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdOutlineStreetview } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

function Products() {
    const [data,fdata]=useState([])
    const mygetaxios = ()=>{
        axios('https://jsonplaceholder.typicode.com/users').then((d)=>{
            console.log(d.data);
            fdata(d.data)
        })
    }

    useEffect(()=>{
        mygetaxios()
    },[]);



  return (
    <div className='container border custop'>
        <div className='row'>
            <div className='col-12'>
                <h1>List of Products</h1>
                <table className="table table-bordered border-primary">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">City</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {data.map((d)=>{
                           return(
                            <tr key={d.id}>
                            <th scope="row">{d.id}</th>
                            <td>{d.name}</td>
                            <td>{d.username}</td>
                            <td>{d.phone}</td>
                            <td>{d.company.name}</td>
                            <td>{d.address.city}</td>
                            <td>
                                {/* <input type='button' value="Edit" className='btn btn-sm btn-warning'/>
                                <input type='button' value="View" className='btn btn-sm btn-success'/>
                                <input type='button' value="Del" className='btn btn-sm btn-danger'/> */}
                                <span className="badge text-bg-primary shadow"><FaEdit/></span>
                                <Link className="badge text-bg-warning text-white ms-2" to={'details/'+d.id}><MdOutlineStreetview/></Link>
                                <span className="badge text-bg-danger ms-2"><MdDelete/></span>
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

export default Products
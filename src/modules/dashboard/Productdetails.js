import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

function Productdetails() {

const {id} = useParams();
console.log(id);
    const [datass,fdata]=useState([])
    const [cadd,scadd]=useState([]);
    const mygetaxios = ()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((d)=>{
            console.log(d.data);
            fdata(d.data);
            scadd(d.data.company);
        })
    }

    useEffect(()=>{
        mygetaxios()
    },[]);



  return (
    <div className='container custop border shadow'>
        <div className='row bg-dark text-white p-3'>
            <div className='col-10'> details</div>
            <div className='col-2 text-end'>
                <Link  to="/parampage" className='btn btn-outline-primary btn-sm'> <IoIosArrowBack/>Back</Link>

            </div>
        </div>
        <div className='row'>
            <div className='col-md-6 p-3'>
                <h1>dyn img</h1>
            </div>
            <div className='col-md-6 p-3'>
                <h1>Product Details Page</h1>
                <hr/>
                <h3>Product Id :{datass.id}</h3>
                <p>Name:{datass.name}</p>
                <p>Email id:{datass.email}</p>
                <p>Website:{datass.website}</p>
                <hr/>
                <fieldset>
                    <legend>Company Details</legend>
                    <h6> Company  Name: {cadd.name}</h6>
                    <h6> Company  Bs: {cadd.bs}</h6>
                    
                </fieldset>

            </div>
        </div>
    </div>
  )
}

export default Productdetails
import axios from 'axios';
import React,{useState} from 'react';

function Networkaxios() {
    const [data,fdata]=useState([])
    const mygetaxios = ()=>{
        axios('https://jsonplaceholder.typicode.com/users').then((d)=>{
            console.log(d.data);
            fdata(d.data)
        })
    }
    
    
        return ( 
        <div className='container'>
            <div className='row'>
                <input type='button' value="fetchapi" onClick={mygetaxios}/>
                    {data.map((obj)=>{
                        return(
                            <section className='col-md-3'>
                            <div className='border p-2 bg-dark  text-white m-2 '>
                            <p className='h2'>Id: {obj.id}</p>
                            <p className='h3'>Name:{obj.name}</p>
                            <p>UserName: {obj.username}</p>
                            <p>Address</p>
                            <hr/>
                            <p>CIty: {obj.address.city}</p>
                        </div>
                        </section>
    
                        )
                    })}
            </div>
        </div>
      )
    }

export default Networkaxios
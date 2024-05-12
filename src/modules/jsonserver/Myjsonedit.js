
import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Myjsonedit() {
    const navigat = useNavigate();
    const [x,y]=useState({
        name:"",
        email:"",
        phone:""
    })

    const {id}=useParams();
    const editsinglerecord = ()=>{
        axios.get(`http://localhost:3333/students/${id}`).then((d)=>{
            console.log(d);
            y(d.data)
        })
    }
    
    useEffect(()=>{
        editsinglerecord()
    },[]);




    const myedit = (data)=>{
            data.preventDefault();
        axios.put(`http://localhost:3333/students/${id}`,x).then((a)=>{
            console.log(a);
            navigat("/jsonpage");
        })

    }

    return (
        <form onSubmit={myedit}>
        <div className='container border custop bg-warning p-5'>
            <div className='row'>
                <div className='col-12'>
                    <h2>Edit Page</h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-5 mb-3'>
                     <label class="form-label">Name</label>
                    <input type='text' name="name" className='form-control' value={x.name} onInput={ e=> y({...x, name:e.target.value})}/>
                   
                </div>
                <div className='col-5 mb-3'>
                     <label class="form-label">email</label>
                    <input type='email' name="email" className='form-control' value={x.email} onInput={ e=> y({...x, email:e.target.value})}/>
                </div>
                <div className='col-5 mb-3'>
                     <label class="form-label">phone</label>
                    <input type='text' name="phone" className='form-control' value={x.phone} onInput={ e=> y({...x, phone:e.target.value})}/>
                </div>
                <div className='col-5'>
                    <button type='submit' className='btn btn-info'>Update record</button>
                </div>
            </div>
        </div>
        </form>

    )
}

export default Myjsonedit
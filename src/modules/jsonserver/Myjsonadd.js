import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Myjsonadd() {
    const navigat = useNavigate();
    const [x,y]=useState({
        name:"",
        email:"",
        phone:""
    })

    const myadddata = (data)=>{
            data.preventDefault();
        axios.post('http://localhost:3333/students',x).then((a)=>{
            console.log(a);
            navigat("/jsonpage");
        })

    }




    return (
        <form onSubmit={myadddata}>
        <div className='container border custop bg-success p-5'>
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
                    <button type='submit' className='btn btn-info'>add new</button>
                </div>
            </div>
        </div>
        </form>

    )
}

export default Myjsonadd
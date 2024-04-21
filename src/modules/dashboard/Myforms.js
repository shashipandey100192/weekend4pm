import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const mystore=[];
function Myforms() {
// const [mystore,mysetstore]=useState([])

const {register,handleSubmit,formState: { errors }}=useForm()
const mydata = (d)=>{
    console.log(d);
    mystore.push(d);
    console.log(mystore)
    localStorage.setItem("userdata",JSON.stringify(mystore));


}

  return (
    <form onSubmit={handleSubmit(mydata)}>
    <div className='container custop shadow p-3 bg-light' >
        <div className='row'>
            <div className='col-12'>
                <h3>Student Registor forms</h3>
            </div>
            <section className='col-md-6'>
            <div className="mb-3">
                <label className="form-label">UserName</label>
                <input type="text" className="form-control" {...register("username",{required:true,maxLength:10,minLength:5})}/>
                {errors.username && <div className="form-text text-danger">field is required</div>}
            </div>
            </section>
            <section className='col-md-6'>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" {...register("email",{required:true})}/>
                {errors.email && <div className="form-text text-danger">email is required</div>}
            </div>
            </section>
            <section className='col-md-6'>
            <div className="mb-3">
                <label className="form-label">DOB</label>
                <input type="date" className="form-control" {...register("dob",{required:true})}/>
                {errors.dob && <div className="form-text text-danger">date  is required</div>}
            </div>
            </section>
            <section className='col-md-6'>
            <div className="mb-3">
                <label className="form-label">Phone No</label>
                <input type="text" className="form-control" {...register("phone",{required:true,pattern: /^[0-9]{10}/})}/>
                {errors.phone && <div className="form-text text-danger">phone is required</div>}
            </div>
            </section>
            <section className='col-md-6'>
            <div className="mb-3">
                <label className="form-label">Address</label>
               <textarea className='form-control' {...register("address",{required:true})}></textarea>
               {errors.address && <div className="form-text text-danger">address is required</div>}
            </div>
            </section>
            <section className='col-md-6'>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="g" value="Male" {...register("gender")}/>
                <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="g" value="Female" {...register("gender")}/>
                <label className="form-check-label">Female</label>
                </div>
            </section>

            <section className='col-md-12 text-center'>
            <input type='submit' value="submit" className='btn btn-success'/>
            <input type='reset' value="cancel" className='btn btn-danger ms-3'/>
            </section>








        </div>
    </div>
    </form>
  )
}

export default Myforms
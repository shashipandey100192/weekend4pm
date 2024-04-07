import React from 'react';
import { useForm } from 'react-hook-form';


function Myforms() {

const {register,handleSubmit,formState: { errors }}=useForm()
const mydata = (d)=>{
    console.log(d);

}

  return (
    <form onSubmit={handleSubmit(mydata)}>
    <div className='container custop shadow p-3 bg-light' >
        <div className='row'>
            <div className='col-12'>
                <h3>Student Registor forms</h3>
            </div>
            <section className='col-md-6'>
            <div class="mb-3">
                <label class="form-label">UserName</label>
                <input type="text" class="form-control" {...register("username",{required:true,maxLength:10,minLength:5})}/>
                {errors.username && <div class="form-text text-danger">field is required</div>}
            </div>
            </section>
            <section className='col-md-6'>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" {...register("email",{required:true})}/>
                {errors.email && <div class="form-text text-danger">email is required</div>}
            </div>
            </section>
            <section className='col-md-6'>
            <div class="mb-3">
                <label class="form-label">DOB</label>
                <input type="date" class="form-control" {...register("dob",{required:true})}/>
                {errors.dob && <div class="form-text text-danger">date  is required</div>}
            </div>
            </section>
            <section className='col-md-6'>
            <div class="mb-3">
                <label class="form-label">Phone No</label>
                <input type="text" class="form-control" {...register("phone",{required:true})}/>
                {errors.phone && <div class="form-text text-danger">phone is required</div>}
            </div>
            </section>
            <section className='col-md-6'>
            <div class="mb-3">
                <label class="form-label">Address</label>
               <textarea className='form-control' {...register("address")}>default value</textarea>
                <div class="form-text text-danger">field is required</div>
            </div>
            </section>
            <section className='col-md-6'>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="g" value="Male" {...register("gender")}/>
                <label class="form-check-label">Male</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="g" value="Female" {...register("gender")}/>
                <label class="form-check-label">Female</label>
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
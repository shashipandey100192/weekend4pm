import React from 'react'
import Networkfetch from './Networkfetch';
import Networkaxios from './Networkaxios';
import { increment } from '../redux/Myactionlist';
import { useSelector,useDispatch } from 'react-redux';


function Contactuspage() {

const mydata = [
  {name:'ravi',age:10,height:'5ft',id:1},
  {name:'mohan',age:10,height:'5ft',id:2},
  {name:'ravi',age:10,height:'5ft',id:3},
  {name:'ravi',age:10,height:'5ft',id:4},
  {name:'ravi',age:10,height:'5ft',id:5},
  {name:'ravi',age:10,height:'5ft',id:6},
  {name:'ravi',age:10,height:'5ft',id:7},
  {name:'ravi',age:10,height:'5ft',id:8}
];

const countes = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


  return (
    <main style={{marginTop:'100px'}} className='border p-3'>

      <div className='container'>
          <div className='row'>
            <div className='col=12'>
              <h3 className='bg-danger text-white'>Total:{countes}</h3>
            </div>
          </div>
        <div className='row'>
          {mydata.map((d)=>{
            return(
              <div className='col-md-3 border' key={d.id}>
                <h1>Name: {d.name}</h1>
                <h1>Age: {d.age}</h1>
                <h1>Height: {d.height}</h1>
                <p className='btn btn-success btn-sm' onClick={() => dispatch(increment())}>Add</p>
              </div>
            )
          })}
      </div>
      </div>
      <Networkfetch/>
      <Networkaxios/>
    </main>
  )
}

export default Contactuspage
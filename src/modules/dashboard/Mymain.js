import React, { lazy , Suspense, useState } from 'react'
// import Child1 from './Child1'
import Child2 from './Child2';


const Child1 = lazy(()=> import('./Child1'));


function Mymain() {

    // const name = "ravi singh";
const [age,setage]=useState(80)
const [name,setname]=useState("ravi singh");
const xyz = ()=>{
alert("welcome to child from pr");
setage(603);

setname(prompt("enter your name"));
}



  return (
    <div className='custop container'>
        <div className='row'>
            <div className='col-12 bg-success text-center p-3'>
                <h1>parent element {name}</h1>
            </div>
        </div>


        <div className='row'>
            <div className='col-md-6 bg-danger'> 
                <Suspense fallback={<h1 className='p-3 mt-3 bg-danger text-center'>loading child element</h1>}>
                    <Child1 abc={name} func={xyz}/>
                </Suspense>
            </div>
            <div className='col-md-6 bg-warning'> 
                <Child2 age={age}/>
            </div>
        </div>



    </div>
  )
}

export default Mymain
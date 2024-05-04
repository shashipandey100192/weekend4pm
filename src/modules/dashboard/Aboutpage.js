import React, { useState } from 'react';
import mgs from '../images/img2.png';

import { myfunc } from '../redux/Mysecondaction';
import { useSelector,useDispatch } from 'react-redux';



function Aboutpage() {

const [a,sf]=useState(800)
const getinputdata = (p)=>{
    sf(p.target.value);
}

const mychange = useSelector((state) => state.count.value)
const mycount = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

const [x,y]=useState(mycount);



  return (
    <main>
      
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">About page</h1>
          <span className='p-3 h2 text-info bg-dark'>{x}</span>
                  <span className='p-3 h2 text-warning bg-dark'>{mycount}</span>
                  <span className='p-3 h2 text-danger bg-dark'>{mychange}</span>
                            <button onClick={() => dispatch(myfunc())}>chagne value</button>

          <input type='number' min="10" max="500" onInput={getinputdata}/>
          <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
          <p>
            <a href="#" className="btn btn-primary my-2">Main call to action</a>
            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
          </p>
          <img src={mgs} width="200"/>
          <img src={mgs} width={a}/>
          <img src={mgs} style={{width:'200px'}}/>
          <img src={mgs} style={{width:`${a}px`}}/>
        </div>
      </div>
    </section>
    </main>
  )
}

export default Aboutpage
import React from 'react';
import { increment, decrement,myreset } from './Myactionlist';
import { useDispatch, useSelector } from 'react-redux';

import { myfunc } from './Mysecondaction';


function Reduxpage() {

    const count = useSelector((state) => state.counter.value)
    const mychange = useSelector((state) => state.count.value)
    const dispatch = useDispatch()

    return (
        <div className='custop container border'>
            <div className='row'>
                <div className='col-12 p-3'>
                    <h1>Redux page </h1>
                    <div>
                        <div>
                            <button onClick={() => dispatch(increment())}>Increment</button>
                            <span>{count}</span>
                            <button onClick={() => dispatch(decrement())}> Decrement</button>
                            <button onClick={() => dispatch(myreset())}> reset value of state</button>
                        </div>
                        <div>
                            
                            <span>{mychange}</span>
                           
                            <button onClick={() => dispatch(myfunc())}> mysecond chagne</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reduxpage
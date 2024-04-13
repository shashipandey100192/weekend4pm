import React from 'react'

function Thirdchild(props) {
  return (
    <div className='container bg-dark text-white'>
        <div className='row'>
            <div className='col-12'>
                <h2>Third child</h2>
                <input type='button' value="call function" onClick={props.myfunc} className='btn btn-danger'/>

            </div>
        </div>

    </div>
  )
}

export default Thirdchild
import React from 'react'
import { Link } from 'react-router-dom'

function Myerrorpage() {

    localStorage.setItem("errorkey","errormsg");
  return (
    <div className='container-fluid custop'>
        <div className='row'>
            <div className='col-12 text-center h1 text-danger'>
                <h1>Error Page</h1>
                <h4>404</h4>
                <h6>Page Not Found</h6>
                <Link to="/" className='btn btn-sm btn-danger'>Back to Home</Link>
            </div>
        </div>
    </div>
  )
}

export default Myerrorpage
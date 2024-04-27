import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Courselanding() {
  return (
    <div className='container-fluid custop' >
        <div className='row'>
            <div className='col-sm-2'>
                <Sidebar/>
            </div>

            <div className='col-sm-10'>
                <Outlet></Outlet>
            </div>

        </div>
    </div>
  )
}

export default Courselanding
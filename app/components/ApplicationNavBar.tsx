import React from 'react'
import { IoSettings } from "react-icons/io5"
import { FaUserCircle } from "react-icons/fa"

const ApplicationNavBar = () => {
  return (
    <nav className='backdrop-blur-xl flex justify-between items-center p-6 border-b border-b-gray-600'>
      <h1 className='font-medium text-xl'>Home</h1>
      <ul className='flex justify-center items-center gap-5'>
        <li>
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Settings">
            <IoSettings size={ 20 }/>
          </div>
        </li>
        <li>
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Profile">
            <FaUserCircle size={ 20 }/>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default ApplicationNavBar
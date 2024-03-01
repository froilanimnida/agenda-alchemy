import React from 'react'
import { ProfileIcon, SettingsIcon, AddNote } from './NavbarComponent'

const ApplicationNavBar = () => {
  return (
    <nav className='backdrop-blur-xl flex justify-between items-center p-6 border-b border-b-gray-600'>
      <h1 className='font-medium text-xl'>Home</h1>
      <ul className='flex justify-center items-center gap-5'>
        <li>
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Add">
            <AddNote />
          </div>
        </li>
        <li>
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Settings">
            <SettingsIcon />
          </div>
        </li>
        <li>
          <div className="tooltip tooltip-bottom tooltip-primary" data-tip="Profile">
            <ProfileIcon />
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default ApplicationNavBar
import Logo from '@/app/components/Logo'
import React from 'react'
import { RiUserSettingsLine } from "react-icons/ri"
import { PiWarningLight } from "react-icons/pi"
import { RxExit } from "react-icons/rx"
import Image from 'next/image'
import SettingsIcon from '../../../public/images/settings-icon.png'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = { title: "AgendaAlchemy | Settings" }

const SettingsComponent = () => {
  return (
    <main className='p-5 flex flex-col gap-10'>
      <Logo/>
      <div className='flex-col flex items-center justify-center'>
        <h1 className='text-center font-bold text-2xl'>Settings</h1>
        <Image
          className='p-5' alt='Image of a 3 gears with magnifying glass along with it'
          src={ SettingsIcon }
          priority={ true }/>
      </div>
      <div>
        <ul className='gap-5 flex flex-col'>
          <li>
            <Link className='flex flex-row gap-3 items-center' href={'/app/settings/profile-settings'}>
              <RiUserSettingsLine />
              Profile Settings
            </Link>
          </li>
          <li>
            <Link className='flex text-red-500 flex-row gap-3 items-center' href={'/app/settings/delete-account'}>
              <PiWarningLight />
              Delete my Account
            </Link>
          </li>
          <li>
            <Link className='flex text-red-500 flex-row gap-3 items-center' href={'/app/settings/logout'}>
              <RxExit />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default SettingsComponent
import Logo from '@/app/components/Logo'
import React from 'react'
import Image from 'next/image'
import LogoutIcon from '../../../../public/images/logout.png'
import Link from 'next/link'
import LogOutButton from './logOutButton'

const Logout = () => {
  return (
    <main className='p-5 flex flex-col gap-10'>
      <Logo/>
      <div className='flex-col flex items-center justify-center'>
        <h1 className='text-center font-bold text-2xl'>Logout</h1>
        <Image
          className='p-10' alt='Image of a 3 gears with magnifying glass along with it'
          src={ LogoutIcon }
          priority={ true }/>
      </div>
      <div className='flex gap-5 flex-col justify-center items-center'>
        <h1>Are you sure you want to log out?</h1>
        <div className='flex flex-row justify-around'>
          <LogOutButton />
          <Link className='btn btn-ghost' href={'/app'}>Cancel</Link>
        </div>
      </div>
    </main>
  )
}

export default Logout
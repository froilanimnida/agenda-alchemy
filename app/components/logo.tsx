import Link from 'next/link'
import React from 'react'
import { PiNotepad } from 'react-icons/pi'

const Logo = () => {
  return (
    <div>
      <Link className='flex items-center' href={'/'}>
        <PiNotepad />
        <h1 className='font-bold'>AgendaAlchemy</h1>
      </Link>
    </div>
  )
}

export default Logo
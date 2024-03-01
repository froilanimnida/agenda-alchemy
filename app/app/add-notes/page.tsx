import Logo from '@/app/components/Logo'
import Link from 'next/link'
import React from 'react'
import NoteTitleForm from './NoteTitleForm'
import AddNoteIcon from '../../../public/images/add-note-icon.png'
import Image from 'next/image'

const AddNotes = () => {
  return (
    <main className='p-5 grid flex-col min-h-screen'>
      <Logo />
      <Image src={ AddNoteIcon } alt='An icon of a paper with check, chat bubbles and like beside it.'/>
      <div className='flex justify-self-center flex-col justify-center items-center gap-5'>
        <h1 className='text-center'>Give your note a title</h1>
        <NoteTitleForm />
        <Link className='btn btn-outline btn-error' href={'/app'}>Cancel</Link>
      </div>
    </main>
  )
}

export default AddNotes
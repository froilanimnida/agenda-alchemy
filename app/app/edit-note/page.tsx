'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import EditNoteField from './EditNoteField'
import ApplicationNavBar from '@/app/components/ApplicationNavBar'
import Link from 'next/link'

const EditNote = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get('noteId') || ''

  return (
    <main className='flex flex-col gap-10'>
      <ApplicationNavBar />

      <h1 className='text-2xl text-center font-bold'>Edit your note</h1>
      <div className='flex px-7 gap-6 justify-center flex-col'>
        <EditNoteField noteId={id}/>

        <Link className='btn btn-error text-center' href={'/app'}>Cancel</Link>
      </div>
    </main>
  )
}

export default EditNote
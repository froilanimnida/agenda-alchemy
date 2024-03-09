'use client'
import React, { useEffect } from 'react'
import EditNoteField from './EditNoteField'
import ApplicationNavBar from '@/app/components/ApplicationNavBar'
import Link from 'next/link'
import { useRouter } from 'next/router'

const EditNote = () => {
  var noteId = ''
  useEffect(() => {
    noteId = sessionStorage.getItem('note_id') ?? ''
  })
  return (
    <main className='flex flex-col gap-10'>
      <ApplicationNavBar />

      <h1 className='text-2xl text-center font-bold'>Edit your note</h1>
      <div className='flex px-7 gap-6 justify-center flex-col'>
        <EditNoteField noteId={noteId}/>

        <Link className='btn btn-error text-center' href={'/app'}>Cancel</Link>
      </div>
    </main>
  )
}

export default EditNote
'use client'
import { supabase } from '@/utils/database/supabase'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const NotesCollections = () => {
  const [userId, setUserId] = useState('')
  const [notes, setNotes] = React.useState<any[]>([]);
  useEffect(() => {
    setUserId(String(parseInt(sessionStorage.getItem('user_id') || '0')))
    const fetchNotes = async () => {
      let { data: notes, error } = await supabase
        .from('notes')
        .select('*').eq('user_id', userId)
  
      if (error) {
        toast.error(error.message);
      } else {
        setNotes(notes as any[]); 
        toast.success('Notes fetched successfully');
      }
    }
    fetchNotes();
  }, [userId]);
  
  return (
    notes.length === 0 ? <h1>Empty notes</h1> : 
    <main>
      <div className='p-3 grid grid-cols-2 grid-rows-10 gap-3'>
        {notes.map((note) => {
          return (
            <Link onClick={() => sessionStorage.setItem('note_id', note.note_id)} href={{
              pathname: 'app/edit-note',
              query: { noteId: note.note_id }
            }} className='border-2 p-2 flex flex-col gap-3 border-zinc-400 rounded-md' key={note.note_id}>
              <h1>{note.title}</h1>
              <p>{note.content}</p>
            </Link>
          )
        })}
      </div>
    </main>
  )
}

export default NotesCollections
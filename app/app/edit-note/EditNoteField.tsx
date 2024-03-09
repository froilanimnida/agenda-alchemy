import { supabase } from '@/utils/database/supabase'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Note {
  title: string;
  content: string; 
}

const EditNoteField = (params: {noteId: string}) => {
  const [note, setNote] = useState<Note | null>(null)
  const [titleValue, setTitleValue] = useState('')
  const [contentValue, setContentValue] = useState('')
  useEffect(() => {
    const fetchNote = async () => {
      let { data: notes, error } = await supabase
      .from('notes')
      .select('title, content').eq('note_id', params.noteId)
      if (error) {
        console.log(error)
        toast.error('Something went wrong.')
      }
      setNote(notes as any)
      if(notes) {
        setNote(notes[0])
        setTitleValue(notes[0].title)
        setContentValue(notes[0].content)
      }
    }
    fetchNote()
  }, [params.noteId])
  const submitUpdated = (e: React.FormEvent) => {
    e.preventDefault()
    const saved = reflectTheUpdateOnDatabase(params.noteId, titleValue, contentValue)
    saved.then(() => {
      toast.success('Successfully saved.')
    },
    () => {
      toast.error('Something went wrong')
    })
  }
  console.log(params.noteId.toString())

  return (
    <form className='flex flex-col gap-5 justify-center items-center' onSubmit={submitUpdated}>
      <input value={titleValue} onChange={(e) => setTitleValue(e.target.value)} className='input input-primary input-sm w-full max-w-xs' type="text" />
      <textarea value={contentValue} onChange={(e) => setContentValue(e.target.value)} className='textarea textarea-primary textarea-sm w-full max-w-xs' />
      <button className='btn w-full btn-primary' type="submit">Save</button>
    </form>
  )
}

const reflectTheUpdateOnDatabase = async (noteID: string, title: string, content: string) => {
  const updatedAt = new Date().toISOString();
  const { data, error } = await supabase
    .from('notes')
    .update({ title: title, content: content, updated_at: updatedAt })
    .eq('note_id', parseInt(noteID))
    .select();
  if (error) {
    console.log(error);
    throw new Error('Something went wrong.');
  }
  return true
}

export default EditNoteField
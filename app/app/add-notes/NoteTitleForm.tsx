'use client'
import { supabase } from '@/utils/database/supabase'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const NoteTitleForm = () => {
  const userId = sessionStorage.getItem('user_id') ?? '';
  const [title, setTitle] = useState('Untitled note');
  const [content, setContent] = useState('');
  const handleNewNotes = (e: React.FormEvent) => {
    e.preventDefault()
    const result = addNotesToDatabase(userId, title, content);
    result.then(() => { toast.success('Successfully saved.') }, () => { toast.error('An error occured while saving.') })
  }
  return (
    <form onSubmit={handleNewNotes} className='flex flex-col justify-center items-center gap-5'>
      <input onChange={e => setTitle(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
      <textarea onChange={e => setContent(e.target.value)} placeholder='Content' className='textarea textarea-primary textarea-sm w-full max-w-xs' />
      <div>
        <button className='btn font-bold btn-primary' type='submit'>Proceed</button>
      </div>
    </form>
  )
}

const addNotesToDatabase = async (userId: string, title: string, content: string) => {
  const { data, error } = await supabase
  .from('notes')
  .insert([
    { user_id: parseInt(userId), title: title, content: content },
  ])
  .select()
  console.log(error);
  console.log(data);
  
}

export default NoteTitleForm
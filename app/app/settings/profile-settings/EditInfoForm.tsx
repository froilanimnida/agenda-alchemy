'use client'
import React, { useState, useEffect } from 'react'
import { FaCircleArrowRight } from "react-icons/fa6"
import toast from 'react-hot-toast';
import { supabase } from '@/utils/database/supabase';

const EditInfoForm = () => {
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const editInfoFields = [
    {
      id: 1,
      label: 'Your new name: ',
      type: 'text',
      placeholder: 'Taylor Swift',
      onchange: (e: { target: { value: string } }) => setNewName(e.target.value)
    },
    {
      id: 2,
      label: 'Your new email: ',
      type: 'text',
      placeholder: 'taylorswift1989',
      onchange: (e: { target: { value: string } }) => setNewEmail(e.target.value)
    },
    {
      id: 3,
      label: 'Your current password:',
      type: 'password',
      placeholder: '********',
      onchange: (e: { target: { value: string } }) => setCurrentPassword(e.target.value)
    },
    {
      id: 4,
      label: 'Your new password: ',
      type: 'password',
      placeholder: '********',
      onchange: (e: { target: { value: string } }) => setNewPassword(e.target.value)
    }
  ]
  const handleEdits = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let saveOnDb = saveEditsOnDatabase(newName, currentPassword, newPassword, newEmail)
    toast.promise(saveOnDb, {
      success: 'Successfully Edited',
      error: 'Something went wrong, please try again.',
      loading: 'Saving changes'
    })
  }
  return (
    <form  onSubmit={handleEdits} className='border p-5 rounded-2xl flex flex-col gap-5'>
      <div>
        {editInfoFields.map(field => {
          return (
            <label key={field.id} className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">{field.label}</span>
              </div>
              <input onChange={field.onchange} type={field.type} placeholder={field.placeholder} className="input input-bordered w-full max-w-xs" />
            </label>
          )
        })}
      </div>

      <div className='flex flex-col gap-3 justify-between items-center'>
        <button type='submit' className='btn btn-primary'>
          Okay
          <FaCircleArrowRight />
        </button>
      </div>
    </form>
  )
}

const saveEditsOnDatabase = async (name: string, currentPassword: string, newPassword: string, newEmail: string) => {
  // TODO: Add authentication before changes
  let user_id = sessionStorage.getItem('user_id')
  const crypto = require('crypto')
  const hashedCurrentPassword = crypto.createHash('sha256').update(currentPassword).digest('base64')
  if (await getHashedPassword(hashedCurrentPassword))
    throw new Error('Password is incorrect.')

  if (name.length == 0) {}
  const { data, error } = await supabase
  .from('users')
  .update({ name:  name})
  .eq('user_id', user_id)
  .select()
}

const getHashedPassword = async (hashedPassword: string) => {
  let { data: users, error } = await supabase.from('users').select('*').eq('password', hashedPassword)
  if (users?.length == 0)
    return false
  return true
}

const getCurrentUserProfileData = async () => {
  let user_id = sessionStorage.getItem('user_id')
  const { data, error } = await supabase.from('users').select('*').eq('user_id', user_id)
  return data
}

export default EditInfoForm
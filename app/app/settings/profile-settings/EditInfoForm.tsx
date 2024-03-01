'use client'
import React, { useState, useRef } from 'react'
import { FaCircleArrowRight } from "react-icons/fa6"
import toast from 'react-hot-toast';

const EditInfoForm = () => {
  const newNameRef = useRef<HTMLInputElement>(null)
  const newUsernameRef = useRef<HTMLInputElement>(null)
  const currentPasswordRef = useRef<HTMLInputElement>(null)
  const newPasswordRef = useRef<HTMLInputElement>(null)
  const [newName, setNewName] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const editInfoFields = [
    {
      id: 1,
      label: 'Your new name: ',
      type: 'text',
      placeholder: 'Taylor Swift',
      ref: newNameRef,
      onchange: (e: { target: { value: string; }; }) => {
        setNewName(e.target.value)
      }
    },
    {
      id: 2,
      label: 'Your new username: ',
      type: 'text',
      placeholder: 'taylorswift1989',
      ref: newUsernameRef,
      onchange: (e: { target: { value: string; }; }) => {
        setNewUsername(e.target.value)
      }
    },
    {
      id: 3,
      label: 'Your current password:',
      type: 'password',
      placeholder: '********',
      ref: currentPasswordRef,
      onchange: (e: { target: { value: string; }; }) => {
        setCurrentPassword(e.target.value)
      }
    },
    {
      id: 4,
      label: 'Your new password: ',
      type: 'password',
      placeholder: '********',
      ref: newPasswordRef,
      onchange: (e: { target: { value: string; }; }) => {
        setNewPassword(e.target.value)
      }
    }
  ]
  const handleEdits = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('Your edits have been saved.')
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
                <input onChange={field.onchange} ref={ field.ref } type={field.type} placeholder={field.placeholder} className="input input-bordered w-full max-w-xs" />
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

export default EditInfoForm
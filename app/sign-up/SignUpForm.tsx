'use client'
import { FaCircleArrowRight } from "react-icons/fa6"
import React, { useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation"
import { supabase } from "@/utils/database/supabase"

const SignUpForm = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const signUpFields = [
    {
      id: 1,
      label: 'Your name:',
      type: 'text',
      placeHolder: 'John Doe',
      onchange: (e: { target: { value: string; }; }) => {
        setName(e.target.value)
      }
    },

    {
      id: 2,
      label: 'Username: ',
      type: 'text',
      placeHolder: 'johndoe1989',
      onchange: (e: { target: { value: string; }; }) => {
        setUsername(e.target.value)
      }
    },

    {
      id: 3,
      label: 'Password:',
      type: 'password',
      placeHolder: '********',
      onchange: (e: { target: { value: string; }; }) => {
        setPassword(e.target.value)
      }
      
    }
  ]
  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name === '')
      toast.error('Name must not be empty.')
    else if (username === '') 
      toast.error('Username must not be empty')
    else if (username.length < 3)
      toast.error('Username must be 3 characters long')
    else if (password === '')
      toast.error('Password must not be empty.')
    else if (password.length < 8)
      toast.error('Password must be 8 characters long.')
    else {
      const addUserPromise = addUserToDatabase(name, username, password)
      toast.promise(addUserPromise, {
        loading: 'Loading',
        success: 'Success, you may login now.',
        error: (error) => `${error.message}`
      }).then(() => router.push('/log-in'))
    }
  }
  return (
    <form className='border p-5 rounded-2xl flex flex-col gap-5' onSubmit={handleSignUp}>
      <div className='flex flex-col gap-5'>
        {signUpFields.map(field => {
          return (
          <label key={field.id} className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">{field.label}</span>
            </div>
            <input onChange={field.onchange} type={field.type} placeholder={field.placeHolder} className="input input-bordered input-primary w-full max-w-xs" />
          </label>
        )
        })}
      </div>

      <div className='flex flex-row justify-between items-center'>
        <button type='submit' className='btn'>
          Sign Up
          <FaCircleArrowRight />
        </button>
        <div className='divider divider-horizontal'>OR</div>
        <Link className='link' href={'/log-in'}>Login instead</Link>
      </div>
    </form>
  )
}

const addUserToDatabase = async (name: string, username: string, password: string) => {
  const crypto = require('crypto')
  const hashedPassword = crypto.createHash('sha256').update(password).digest('base64')
  const { data, error } = await supabase
    .from('users')
    .insert([
      { name: name, username: username, password: hashedPassword },
    ])
    .select()
  if (error?.message.startsWith('duplicate')) {
    throw new Error('Username already taken');
  }
}

export default SignUpForm
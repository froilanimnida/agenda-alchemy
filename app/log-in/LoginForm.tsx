'use client'
import { FaCircleArrowRight } from "react-icons/fa6"
import React, { useState } from 'react'
import { supabase } from "@/utils/database/supabase"
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation"

const LoginForm = () => {
  const router = useRouter()
  const [signInUsername, setSignInUsername] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (signInUsername.length == 0)
      toast.error('Username field is empty.')
    else if (signInPassword.length == 0)
      toast.error('Password field is empty.')
    else {
      const loginPromise = logInFunction(signInUsername, signInPassword);
      toast.promise(loginPromise, {
        loading: 'Connecting',
        success: 'Successfully Logged In...',
        error: (error) => `${error.message}`
      })
      .then((result) => {
        if (result && result[0]) {
          sessionStorage.setItem('name', result[0].name)
          sessionStorage.setItem('user_id', result[0].id)
          sessionStorage.setItem('username', result[0].username)
          router.push('/app')
        }
      })
      .catch(() => {})
    }
  }

  const signInFields = [
    {
      id: 1,
      label: 'Username:',
      type: 'text',
      placeHolder: 'johndoe123',
      onchange: (e: { target: { value: string; }; }) => {
        setSignInUsername(e.target.value)
      }
    },
    {
      id: 2,
      label: 'Password:',
      type: 'password',
      placeHolder: '********',
      onchange: (e: { target: { value: string; }; }) => {
        setSignInPassword(e.target.value)
      }
    }
  ]
  
  return (
    <form className='border p-5 rounded-2xl flex flex-col gap-5' onSubmit={handleSignIn}>
      <div>
        {signInFields.map(field => {
          return (
            <label key={field.id} className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">{field.label}</span>
              </div>
              <input onChange={field.onchange} type={field.type} placeholder={field.placeHolder} className="input input-bordered w-full max-w-xs" />
            </label>
          )
        })}
      </div>

      <div className='flex flex-row justify-between items-center'>
        <button type='submit' className='btn'>
          Log In
          <FaCircleArrowRight />
        </button>
        <div className='divider divider-horizontal'>OR</div>
        <Link className='link' href={'/sign-up'}>Sign Up instead</Link>
      </div>
    </form>
  )
}

const logInFunction = async (username: string, password: string) => {
  const crypto = require('crypto')
  const hashedPassword = crypto.createHash('sha256').update(password).digest('base64')
  let { data: users, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .eq('password', hashedPassword)
  
  if (users?.length === 0)
    throw new Error('Invalid username or password');
  return users
}

export default LoginForm
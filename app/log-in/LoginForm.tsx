'use client'
import { FaCircleArrowRight } from "react-icons/fa6"
import React, { useState, useRef } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation"

const LoginForm = () => {
  const router = useRouter()
  const signInUsernameRef = useRef<HTMLInputElement>(null)
  const signInPasswordRef = useRef<HTMLInputElement>(null)
  const [signInUseraname, setSignInUsername] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/app')
  }
  const signInFields = [
    {
      id: 1,
      label: 'Username:',
      type: 'text',
      placeHolder: 'johndoe123',
      ref: signInUsernameRef,
      onchange: (e: { target: { value: string; }; }) => {
        setSignInUsername(e.target.value)
      }
    },

    {
      id: 2,
      label: 'Password:',
      type: 'password',
      placeHolder: '********',
      ref: signInPasswordRef,
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
              <input onChange={field.onchange} ref={ field.ref } type={field.type} placeholder={field.placeHolder} className="input input-bordered w-full max-w-xs" />
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

export default LoginForm
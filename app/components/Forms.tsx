'use client'
import Link from 'next/link';
import React, { useState, useRef } from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";

const FormComponent = ({mode}: {mode: string}) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [signInUseraname, setSignInUsername] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const nameRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const signInUsernameRef = useRef<HTMLInputElement>(null)
  const signInPasswordRef = useRef<HTMLInputElement>(null)
  const signUpFields = [
    {
      id: 1,
      label: 'Your name:',
      type: 'text',
      placeHolder: 'John Doe',
      ref: nameRef,
      onchange: (e: { target: { value: string; }; }) => {
        setName(e.target.value)
      }
    },

    {
      id: 2,
      label: 'Username: ',
      type: 'text',
      placeHolder: 'johndoe1989',
      ref: usernameRef,
      onchange: (e: { target: { value: string; }; }) => {
        setUsername(e.target.value)
      }
    },

    {
      id: 3,
      label: 'Password:',
      type: 'password',
      placeHolder: '********',
      ref: passwordRef,
      onchange: (e: { target: { value: string; }; }) => {
        setPassword(e.target.value)
      }
    }
  ]

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
      ref: signInUsernameRef,
      onchange: (e: { target: { value: string; }; }) => {
        setSignInPassword(e.target.value)
      }
    }
  ]

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
  }

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  

  if (mode === 'sign-up') {
    return (
      <form className='border p-5 rounded-2xl' onSubmit={handleSignUp}>
        <div>
          {signUpFields.map(field => {
            return (
            <label key={field.id} className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">{field.label}</span>
              </div>
              <input onChange={field.onchange} ref={ field.ref } type={field.type} placeholder={field.placeHolder} className="input input-bordered w-full max-w-xs" />
              <div className="label">
                <span className="label-text-alt"></span>
              </div>
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

  else {
    return (
      <form className='border p-5 rounded-2xl' onSubmit={handleSignIn}>
        <div>
        {signInFields.map(field => {
            return (
            <label key={field.id} className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">{field.label}</span>
              </div>
              <input onChange={field.onchange} ref={ field.ref } type={field.type} placeholder={field.placeHolder} className="input input-bordered w-full max-w-xs" />
              <div className="label">
                <span className="label-text-alt"></span>
              </div>
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
          <Link className='link' href={'/log-in'}>Sign Up instead</Link>
        </div>
      </form>
    )
  }
}

export default FormComponent
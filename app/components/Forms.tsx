'use client'
import React, { useState, useRef } from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";

const FormComponent = ({mode}: {mode: string}) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const nameRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
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

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
  }
  

  if (mode === 'sign-up') {
    return (
      <form onSubmit={handleSignUp}>
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

        <button type='submit' className='btn'>
          Sign Up
          <FaCircleArrowRight />
        </button>
      </form>
    )
  }

  else {
    return (
      <div>Sign In</div>
    )
  }
}

export default FormComponent
import React from 'react'
import Logo from '../components/Logo'
import SignUpIcon from '../../public/images/sign-up-icon.png'
import Image from 'next/image'
import SignUpForm from './SignUpForm'
import type { Metadata } from "next";

export const metadata: Metadata = { title: "AgendaAlchemy | Sign Up" }

const SignUpPage = () => {
  return (
    <div className='p-5 flex min-h-screen justify-between flex-col'>
      <Logo />
      <main className='p-5 gap-5 flex flex-col'>
        <Image 
          priority={true}
          src={ SignUpIcon }
          className='p-10' alt='Image of generic icon of a person' />

        <h1 className='text-center font-bold'>Create an Account</h1>
        <SignUpForm />
      </main>
    </div>
  )
}

export default SignUpPage
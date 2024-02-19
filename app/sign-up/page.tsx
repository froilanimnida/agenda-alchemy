import React from 'react'
import Logo from '../components/Logo'
import SignUpIcon from '../../public/images/sign-up-icon.png'
import Image from 'next/image'
import FormComponent from '../components/Forms'

const SignUpPage = () => {
  return (
    <div className='p-7 flex min-h-screen justify-between flex-col'>
      <Logo />
      <main className='p-5'>
        <Image priority={true} src={ SignUpIcon } alt='Image of generic icon of a person' />
        <FormComponent mode="sign-up" />
      </main>
    </div>
  )
}

export default SignUpPage
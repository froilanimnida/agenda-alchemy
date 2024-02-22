import Logo from '@/app/components/Logo'
import React from 'react'
import ProfileSettingsIcon from '../../../../public/images/profile-settings-icon.png'
import Image from 'next/image'
import FormComponent from '@/app/components/Forms'

const ProfileSettings = () => {
  return (
    <main className='p-5 flex flex-col gap-10'>
      <Logo />
      <Image
        className='p-5'
        priority={true}
        src={ ProfileSettingsIcon }
        alt='A color pink paper with check icon on top of it.' />
      <h1 className='text-center font-bold'>Edit your information here.</h1>
      <FormComponent mode='edit-info' />
    </main>
  )
}

export default ProfileSettings
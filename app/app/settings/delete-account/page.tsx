import Logo from '@/app/components/Logo'
import Image from 'next/image'
import React from 'react'
import DeletionWarningImage from '../../../../public/images/warning-delete.png'
import AccountDeletionButtons from '@/app/components/AccountDeletionButtons'

const DeleteAccountPage = () => {
  return (
    <main className='p-5 flex flex-col gap-10'>
      <Logo />
      <Image
        className='p-5'
        priority={true}
        src={ DeletionWarningImage }
        alt='Yellow trangle with exclamation inside of it'/>

      <h1 className='text-center font-bold text-xl'>Please be certain.</h1>

      <div className='flex flex-col p-3 gap-14'>
        <div className='gap-3 flex flex-col' >
          <h1 className='font-bold'>We're sorry to see you go!</h1>
          <div className='flex-col flex gap-4'>
            <p>We understand that you've decided to delete your account with AgendaAlchemy. Before you say goodbye, we wanted to make sure you're aware of a few things:</p>
            <ul className='gap-3 flex flex-col'>
              <li className='list-inside list-disc'>Deleting your account is permanent. Once you confirm, all your notes, tags, and other data associated with your account will be permanently deleted and cannot be recovered.</li>
              <li className='list-inside list-disc'>Data deletion, depending on the app's privacy policy, your data may be stored for a certain period even after you delete your account. Please refer to the app's privacy policy for more information.</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='font-bold'>Are you sure you want to delete your account?</h1>
          <div>
            <ul className='flex-col flex gap-3'>
              <li className='list-inside list-disc'>If you're sure, click the "Delete Account" button below.</li>
              <li className='list-inside list-disc'>If you'd like to keep your account, click "Cancel".</li>
            </ul>
          </div>
        </div>

        <div>
          <h1>We appreciate your feedback!</h1>
          <p>If you have any feedback about why you're deleting your account, we'd love to hear it. Your feedback helps us improve our app for future users. You can share your feedback by sendng a message to this <a href='mailto:froilanaquino1@gmail.com'>email.</a></p>
        </div>
        
        <div className='flex flex-col gap-5'>
          <h1>Thank you for using AgendaAlchemy!</h1>
          <div>
            <p>We wish you all the best in your future endeavors.</p>
            <p>Sincerely,</p>
            <p>The AgendaAlchemy's Developer</p>
          </div>
        </div>

      </div>

      <div className='flex flex-row justify-between p-3'>
        <AccountDeletionButtons />
      </div>
    </main>
  )
}

export default DeleteAccountPage
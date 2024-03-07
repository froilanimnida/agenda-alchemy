'use client'
import { supabase } from '@/utils/database/supabase'
import React from 'react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const AccountDeletionButtons = () => {
  const router = useRouter()
  const handleDeletion = () => {
    let promiseResult = deleteAccount()
    toast.promise(promiseResult, {
      loading: 'Processing',
      success: 'Successfully deleted user and notes.',
      error: 'Something went wrong. Please try again.'
    }).then(() => {
        router.push('/log-in')
        sessionStorage.clear()
      })
  }
  return <button onClick={handleDeletion} className='btn btn-error'>Delete Account</button>
}

const deleteAccount = async () => {
  let user_id = sessionStorage.getItem('user_id')
  const { error } = await supabase
    .from('users')
    .delete()
    .eq('user_id', user_id)
  console.log(error)
  if (error == null)
    Promise.resolve()
}

export default AccountDeletionButtons
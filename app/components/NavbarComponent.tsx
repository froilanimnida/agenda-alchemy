'use client'
import React from 'react'
import { IoSettings } from "react-icons/io5"
import { FaUserCircle } from "react-icons/fa"
import { useRouter } from 'next/navigation'
import { IoAddCircle } from "react-icons/io5"

export const ProfileIcon = () => {
const router = useRouter()
  return <FaUserCircle onClick={() => { router.push('/app/profile') }} size={ 20 }/>
}

export const SettingsIcon = () => {
  const router = useRouter()
  return <IoSettings onClick={() => { router.push('/app/settings') }} size={ 20 }/>
}

export const AddNote = () => {
  const router = useRouter()
  return <IoAddCircle onClick={() => { router.push('/app/add-notes') }} size={20} />
}
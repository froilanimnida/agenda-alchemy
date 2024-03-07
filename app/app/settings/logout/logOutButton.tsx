'use client'
import Link from "next/link"
import React from "react"

const LogOutButton = () => {
  const clearSession = () => {
    sessionStorage.clear()
  }
  return <Link onClick={clearSession} prefetch={ true } className='btn btn-error' href={'/log-in'}>Okay</Link>
}

export default LogOutButton
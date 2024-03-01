'use client'
import React from 'react'

const NoteTitleForm = () => {
  return (
    <form className='flex flex-col justify-center items-center gap-5'>
      <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
      <div>
        <button className='btn font-bold btn-primary' type='submit'>Proceed</button>
      </div>
    </form>
  )
}

export default NoteTitleForm
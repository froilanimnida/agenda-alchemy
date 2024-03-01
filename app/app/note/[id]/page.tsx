import React from 'react'

const Note = ({ params }: { params: { id: string } }) => {
  return (
    <h1>{params.id}</h1>
  )
}

export default Note 
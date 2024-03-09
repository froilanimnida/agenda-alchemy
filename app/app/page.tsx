import React from 'react'
import ApplicationNavBar from '../components/ApplicationNavBar'
import { Metadata } from 'next'
import NotesCollections from './notesCollections'

export const metadata: Metadata = { title: "AgendaAlchemy | Home" }

const App = () => {
  return (
    <main>
      <ApplicationNavBar />
      <NotesCollections />
    </main>
  )
}

export default App
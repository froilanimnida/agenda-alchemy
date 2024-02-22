import React from 'react'
import ApplicationNavBar from '../components/ApplicationNavBar'
import { Metadata } from 'next'

export const metadata: Metadata = { title: "AgendaAlchemy | Home" }

const App = () => {
  return (
    <main>
      <ApplicationNavBar/>
    </main>
  )
}

export default App
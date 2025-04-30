import React from 'react'

const App = () => {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-black'>
      <h1 className="text-3xl font-bold underline underline-offset-4 decoration-wavy text-white">
        <span className='text-green-400'>DEVOPS</span> Microproject 1
      </h1>
      <p className="text-lg text-gray-700 mt-10">
        Deploy a containerized web application using Docker
      </p>
    </main>
  )
}

export default App
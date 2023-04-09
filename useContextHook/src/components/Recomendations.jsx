import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Recomendations = () => {
  const user = useContext(UserContext)
  return (
    <div className='text-center mt-10'>
      <h1 className='text-2xl mb-5'>Hello {user} </h1>
      <h2>Recomendations</h2>
      </div>
  )
}

export default Recomendations
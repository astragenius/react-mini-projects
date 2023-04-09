import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Podcasts = () => {
  const user = useContext(UserContext)
  return (
    <div className='text-center mt-10'>
      <h1 className='text-2xl mb-5'>Welcome to {user}'s Podcasts</h1>
      Podcasts
      </div>
  )
}

export default Podcasts
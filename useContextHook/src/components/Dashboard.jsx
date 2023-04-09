import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Dashboard = () => {
    const user = useContext(UserContext)
  return (
    <div className='text-center mt-10'>
        <h1 className='text-2xl mb-5'>
            Hello {user}
        </h1>
        <h2>Your Dashboard</h2>
    </div>
  )
}

export default Dashboard
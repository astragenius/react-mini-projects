import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Dashboard = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h1>
            {user}
        </h1>
        <h2>Your Dashboard</h2>
    </div>
  )
}

export default Dashboard
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Recomendations from './components/Recomendations'
import Podcasts from './components/Podcasts'
import { UserContext } from './context/UserContext'
import Home from './components/Home'
import { useState } from 'react'
function App() {

  const [user, setUser] = useState('Matze')
 

  return (
    <>
      <h1 className='text-3xl text-center mt-5'>React UseContext Project</h1>
            <Router>
                <UserContext.Provider value={[user, setUser]}>
                  <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path='/recomendations' element={<Recomendations/>}/>
                    <Route path='/podcasts' element={<Podcasts/>}/>
                  </Routes>
                </UserContext.Provider>
            </Router>

    </>
  )
}

export default App

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Recomendations from './components/Recomendations'
import Podcasts from './components/Podcasts'
import { UserContext } from './context/UserContext'
import Home from './components/Home'
function App() {
 

  return (
    <>
      <h1 className='text-3xl'>React UseContext Project</h1>
            <Router>
                <UserContext.Provider value="Matze">
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

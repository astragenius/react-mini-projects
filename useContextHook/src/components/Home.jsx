import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"


const Home = () => {
  const [user, setUser] = useContext(UserContext)
  return (
    <div className="flex flex-col items-center">
        <div className="flex items-center gap-5 justify-items-center">
            <h1 className="text-xl mt-4 mb-2"> {user}'s Home</h1>
            <button
            onClick={() => setUser('Unknown')} 
            className="text-sm border bg-blue-500 text-white rounded py-2 px-5 hover:bg-blue-400">Set User
            </button>
        </div>
        <Link className="text-indigo-500 hover:opacity-80" to='/dashboard'>Dashboard</Link> 
        <Link className="text-indigo-500 hover:opacity-80" to='/recomendations'>Recomendations</Link> 
        <Link className="text-indigo-500 hover:opacity-80" to='/podcasts'>Podcasts</Link> 
    </div>
  )
}

export default Home
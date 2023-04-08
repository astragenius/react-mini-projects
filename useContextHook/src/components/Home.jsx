import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="flex flex-col">
        <h1>Home</h1>
        <Link className="text-indigo-400" to='/dashboard'>Dashboard</Link> 
        <Link className="text-indigo-400" to='/recomendations'>Recomendations</Link> 
        <Link className="text-indigo-400" to='/podcasts'>Podcasts</Link> 
    </div>
  )
}

export default Home
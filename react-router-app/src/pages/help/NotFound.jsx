import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod vel nobis officiis, dolor, facilis dolore voluptatem quidem similique quis aperiam eligendi doloribus corrupti quia! Est, corrupti dicta? Perspiciatis, omnis.</p>

        <p>Go to the <Link to='/'>Homepage</Link></p>
    </div>
  )
}

export default NotFound
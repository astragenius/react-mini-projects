
import { useLoaderData, Link } from 'react-router-dom'



export default function Career() {

    
    const careers = useLoaderData()
    return (
        <div className='careers'>

        {careers.map(career => (
            <Link to={career.id.toString()} key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>
        ))}

    </div>
  )
}
export const carrersLoader = async () => {
   
   
    const res = await fetch('http://localhost:4000/careers')
    if(!res.ok) {
        throw Error('could not Fetch careers')
    }
   
    return res.json()
}


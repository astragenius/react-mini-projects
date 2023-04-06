import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export const careerDetailsLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch('http://localhost:4000/careers/' + id)
    if(!res.ok) {
        throw Error('could not find that career')
    }
    return res.json();
}

const CareerDetails = () => {
    const career = useLoaderData();
   
  return (
    <div className='careers-details'>
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Loacation: {career.location}</p>
        <div className='details'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem dignissimos fugit dolore saepe recusandae? Asperiores, veniam voluptates explicabo sed, nobis, ad sit a inventore earum eaque atque praesentium laborum!
            </p>
        </div>
    </div>
  )
}

export default CareerDetails
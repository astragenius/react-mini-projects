import { Outlet } from "react-router-dom"


const CareersLayout = () => {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et doloremque quaerat officiis nesciunt, fugit, perferendis commodi quas a dolorem optio delectus enim placeat maxime aperiam eos illo hic maiores debitis.</p>

        <Outlet/>
    </div>
  )
}

export default CareersLayout
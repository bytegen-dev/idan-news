import React from 'react'
import { Link } from 'react-router-dom'

function Backdrop() {
  return (
    <div className='backdrop' onClick={()=>{
      document.getElementById("please-hide-ii").click()
    }}>
            <Link id='please-hide-ii' style={{display: "none"}} to={"/"}>HideMenu</Link>
    </div>
  )
}

export default Backdrop

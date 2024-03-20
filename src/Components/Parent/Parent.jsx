import React from 'react'
import './Parent.css'
import { Link } from 'react-router-dom'

const Parent = () => {
  return (
    <>
    <div className="parent_container">
        <div className="parent_page">
            <Link><button className='parent_btn'>Breakfast</button></Link>
            <Link><button className='parent_btn'>Lunch</button></Link>
            <Link><button className='parent_btn'>Snacks</button></Link>
            <Link><button className='parent_btn'>Dinner</button></Link>
        </div>
    </div>
    </>
  )
}

export default Parent
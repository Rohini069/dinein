import React from 'react'
import './LandingPage.css'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
    const navigate = useNavigate();
    const redirectToParent=()=>{
        navigate('/dineinoptions')

    }
  return (
    <div id="landing_container">
        <div className="landing_page">
            <h1>Welcome to Dinein</h1>
            <p>Discover, Share and fill your apetite with love and laughter.</p>
            <button className='landing_btn' onClick={()=>redirectToParent()}>Eatery world</button>
        </div>
    </div>
  )
}

export default LandingPage
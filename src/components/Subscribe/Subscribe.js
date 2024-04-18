import React from 'react'
import './Subscribe.css'
function Subscribe() {
  return (
    <div className='subscribe'>
        <div className='content'>
        <h2>Join Our DeFi Community</h2>
        <form action='https://getform.io/f/3777be90-2537-4981-82a7-935ed5cb3b04' method='POST'>
            <div className='form-container' display-col>
                <input type='email' name='email' placeholder='Enter your email'/>
                <button className='btn'>Sign Up</button>
                </div>
                <div className='form-container'>
                    <input type='checkbox'/><p>Yes, I agree to receive email communication from DeFi</p>
                </div>
        </form>
        </div>
    </div>
  )
}

export default Subscribe
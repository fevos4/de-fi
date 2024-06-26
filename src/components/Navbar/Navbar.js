import React, {useState} from 'react'
import './Navbar.css'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div className='Navbar'>
        <div className="container">
            <h1 style={{marginLeft: '1rem' , color: '#00d8ff'}}>Defi</h1>
        <ul className={click ? 'nav active' : 'nav'}>
            <li className='nav-item'><a href="">Platform</a></li>
            <li className='nav-item'><a href="">Developers</a></li>
            <li className='nav-item'><a href="">Community</a></li>
            <li className='nav-item'><a href="">About</a></li>
            <li className= 'nav-item'><a className='btn' href="/">Use Defi</a></li>
        </ul>
        <div onClick={handleClick} className="humburger">
            {click ? (<AiOutlineClose className= 'icon'/> ): (<AiOutlineMenu className='icon'/> )}
            

        </div>
        </div>
    </div>
  )
}

export default Navbar
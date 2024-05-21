import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='Header_main'>
            <div className='Header_left'>
                <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
                <span>COURSE</span>
            </div>
            <div className='Header_middle'>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="admin/">ABOUT US</Link></li>
                    <li><Link>Courses</Link></li>
                    <li><Link>Elements</Link></li>
                    <li><Link>NEWS</Link></li>
                    <li><Link>Contact</Link></li>
                </ul>
            </div>
            <div className="Header_right">
                <i class="fa-solid fa-phone"></i>
                <span>+43 4566 7788 2457</span>
            </div>
        </div>
    )
}

export default Header
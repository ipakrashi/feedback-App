import React from 'react'
import { FaQuestion } from 'react-icons/fa6'
import { Link } from 'react-router'

function AboutIconLink() {
    return (
        <div className='about-link'>
            <Link to='/about'>
                <FaQuestion size={30} />
            </Link>
        </div>
    )
}

export default AboutIconLink

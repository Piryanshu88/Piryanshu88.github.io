import React from 'react'
import CV from '../../assets/Piryanshu_Bisht_Resume.pdf'
import "./Header.css"

export const Resume = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

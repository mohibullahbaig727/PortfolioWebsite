import React from 'react'
import CV from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Downlaod CV</a>
        <a href="#contact" className='btn btn-primary'>Contat Mohib</a>
    </div>
  )
}

export default CTA
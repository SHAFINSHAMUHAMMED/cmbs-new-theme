import React from 'react'
import './theory.css'
import img from '../../assets/theoryImg.webp'
import pattern from '../../assets/svg/leader_pattern.svg'
function theory_integration() {
  return (
    <div id='integrate-theory' className='theory-main'>
      <div className='theory-sub'>
        <h3>Integrating Theory with Practice</h3>
        <p className='main-p'>Our unique educational model incorporates work-based learning, balancing classroom theory with practical industry experience. This approach not only enriches our curriculum but also enhances the employability and professional development of our students.</p>
      </div>
      <img className='theory-img' src={img} alt="img" />
      <img className='pattern1' src={pattern} alt="pattern" />
    </div>
  )
}

export default theory_integration

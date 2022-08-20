import React from 'react'
import PackagesSlide from '../components/PackagesSlide'
import Subjectcarousel from '../components/Subjectcarousel'
import Circles from '../components/AllSubjectsquiz/Maths/Circles'

function Sectionpage() {
  return (
    <div>
        <div className='flex flex-col'>
    <img src='https://www.agrivision4u.com/images/home-image1.svg' className=' border-2 border-red-500'></img>
  <Subjectcarousel/>
  <Circles/>
  <PackagesSlide/>
  
    </div>




    </div>
  )
}

export default Sectionpage
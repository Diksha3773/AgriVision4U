import React from 'react'
import { useNavigate } from 'react-router-dom'
import Subjects from './Subjects'
function Subjectcarousel() {
    const slideCards=(direction)=> {
        var container = document.getElementById('cards')
        let scrollCompleted = 0
        var slideVar = setInterval(() =>{
          if (direction === 'left') {
            container.scrollLeft -= 30
          } else {
            container.scrollLeft += 30
          }
          scrollCompleted += 100
          if (scrollCompleted >= 1000) {
            window.clearInterval(slideVar)
          }
        }, 50)
      }
    let navigate = useNavigate();
    return (
        <>
            <div className='flex flex-col justify-center rounded items-center w-full sm:w-[98%] px-auto text-center my-8'>
                <div className='flex flex-col p-2 m-2 mb-8 text-center'>
                    <span className='text-3xl font-sans font-bold'>Top Placements </span>
                    <span className='text-lg font-mono font-semibold '> (Computer Science and Engineering)</span>
                </div>
                <div className="flex flex-row relative max-w-[20rem] md:max-w-[39rem] xl:max-w-[58rem] max-h-full px-auto">
                    <i className="absolute top-1/2 -left-6 active:translate-y-1 fa-solid fa-angle-left self-center pl-4 text-2xl cursor-pointer" onClick={()=>slideCards('left')}></i>
                    <div id="cards" className="scrollbar flex space-x-6 overflow-x-scroll pl-1 pt-2 mx-auto">
                        <Subjects/>
                    </div>
                    <i className="absolute top-1/2 -right-6 active:translate-y-1 fa-solid fa-angle-right self-center pr-4 text-2xl cursor-pointer" onClick={()=>slideCards('right')}></i>

                </div>
                <div className='flex items-center justify-center'>
                    <button className='bg-green-600 text-lg shadow-md w-24 h-12 p-2 m-0 mb-2 text-white rounded-lg hover:bg-green-700 hover:text-base focus:ring-4 focus:ring-green-300' onClick={() => { navigate("/placements") }}>View All</button>
                </div>
            </div>
        </>
    )
}

export default Subjectcarousel
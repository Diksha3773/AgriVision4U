import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Menu() {
    let navigate = useNavigate();
    const [openhome, setOpenhome] = useState(true);
    const [openabout, setOpenabout] = useState(false);
    const [openacad, setOpenacad] = useState(false);
    const [openpupil, setOpenpupil] = useState(false);
    const [openresearch, setOpenresearch] = useState(false);
    const handleabout = () => {
        setOpenhome(false);
        setOpenabout(!openabout);
        setOpenacad(false);
        setOpenpupil(false);
        setOpenresearch(false);
    }
    const handlecad = () => {
        setOpenhome(false);
        setOpenabout(false);
        setOpenacad(!openacad);
        setOpenpupil(false);
        setOpenresearch(false);
    }
    const handlehome = () => {
        setOpenhome(!openhome);
        setOpenabout(false);
        setOpenacad(false);
        setOpenpupil(false);
        setOpenresearch(false);
    }
    const handlepupil = () => {
        setOpenhome(false);
        setOpenabout(false);
        setOpenacad(false);
        setOpenpupil(!openpupil);
        setOpenresearch(false);
    }
   
    return (
        <>
            <div className='w-full  lg:flex max-h-max m-2 overflow-y-auto scrollbar'>
                <div className={"border-2 border-red-200 h-[500px]  max-w-full w-72 xl:w-[20rem] 2xl:w-[22rem] flex flex-col m-2 mt-10 shadow rounded "}>
                    <div className='text-xl p-2 w-full border-2 bg-blue-500 text-white rounded-t shadow'>All Subjects</div>
                    <div className='p-3'>
                        <div className={"p-2 my-1 shadow rounded cursor-pointer font-medium " + (openhome?'bg-blue-200':'')} onClick={() => { navigate("/"); handlehome(); }}><i className='fa fa-home w-6 px-auto'></i>Home</div>
                    
                        <div className={"p-2 my-1 shadow rounded cursor-pointer " + (openabout ? 'bg-blue-200' : '')}>
                    
                           
                            <div onClick={handleabout} className = "font-medium">Mathematics</div>
                            <div className={"z-10 my-2 border rounded-b-md max-h-max group-hover:block shadow-inner bg-white duration-700 " + (openabout ? '' : 'hidden')}>
                                <div ><button className='flex border-[0.05px] justify-start w-full p-2 hover:bg-blue-100 active:translate-y-1 shadow-sm' onClick={() => {  navigate("/Circles") }}>Geometry</button></div>
                                <div ><button className='flex border-[0.05px] justify-start w-full p-2 hover:bg-blue-100 active:translate-y-1 shadow-sm' onClick={() => { navigate("/Linearequations") }}>Algebra</button></div>
                                <div ><button className='flex border-[0.05px] justify-start w-full p-2 hover:bg-blue-100 active:translate-y-1 shadow-sm' onClick={() => { navigate("/Pythagoras") }}>Trigonometry</button></div>
                                
                            </div>
                        </div>
                        <div className={"p-2 my-1 shadow rounded cursor-pointer " + (openacad ? 'bg-blue-200' : '')}>
                            <div onClick={handlecad} className = "font-medium">Chemistry</div>
                            <div className={"z-10 my-2 border rounded-b-md max-h-max group-hover:block shadow-inner bg-white duration-500 " + (openacad ? '' : 'hidden')}>
                                <div > <button className='flex border-[0.05px] justify-start w-full p-2 hover:bg-blue-100 active:translate-y-1 shadow-sm' onClick={() => { }}>Solid State</button></div>
                                <div > <button className='flex border-[0.05px] justify-start w-full p-2 hover:bg-blue-100 active:translate-y-1 shadow-sm' onClick={() => { navigate("/Circles"); }}>Electrochemistry</button></div>
                                <div ><button className='flex border-[0.05px] justify-start w-full p-2 hover:bg-blue-100 active:translate-y-1 shadow-sm' onClick={() => { navigate("/Linearequations"); }}>P-Block Elements</button></div>
                                <div > <button className='flex border-[0.05px] justify-start w-full p-2 hover:bg-blue-100 active:translate-y-1 shadow-sm' onClick={() => { navigate("Pythagoras"); }}>Surface Chemistry</button></div>
                               
                            </div>
                        </div>
                        <div className={"p-2 my-1 shadow rounded cursor-pointer " + (openpupil ? 'bg-blue-200' : '')}>
                            <div onClick={handlepupil} className = "font-medium">Physics</div>
                            <div className={"z-10 my-2 border rounded-b-md max-h-max group-hover:block shadow-inner bg-white duration-500 " + (openpupil ? '' : 'hidden h-0')}>
                                <div > <button className='flex border-[0.05px] justify-start w-full p-2 hover:bg-blue-100 active:translate-y-1 shadow-sm' onClick={() => {navigate("/Linearequations") }}>Laws Of Motion</button></div>
                                <div > <button className='flex border-[0.05px] justify-start p-2 w-full   hover:bg-blue-100 active:translate-y-1 shadow-sm' onClick={() => { navigate("/Circles") }}>Gravitation</button></div>
                                <div > <button className='flex border-[0.05px] justify-start p-2 w-full   hover:bg-blue-100 active:translate-y-1 shadow-sm' onClick={() => { navigate("/Linearequations") }}>Motion in straight line</button></div>
                                <div > <button className='flex border-[0.05px] justify-start p-2 w-full   hover:bg-blue-100 active:translate-y-1 shadow-sm' onClick={() => { navigate("/Pythagoras") }}>Motion in Plane</button></div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu

import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    //small screen nav bar click to show menu
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-900 fixed  drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl text-white font-bold mr-4 sm:text-4xl'>INOTE.</h1>
                <ul className='hidden md:flex text-zinc-400'>
                    <li>
                        {/* <NavLink to={'/home'}>
                            Home
                        </NavLink> */}
                        
                    </li>
                    
                    <li>My blogs</li>
                    
                    
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='px-8 py-3'>
                    Sign In
                </button>
            </div>
            <div className='md:hidden' onClick={handleClick} >
                {!nav ? <MenuIcon className='w-10 text-white mr-4'/>: <XIcon className='w-10 text-white mr-4'/> }
                
            </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200  w- w-full px-8'}>
        
            <li className='border-b-2 border-zinc-300 w-full'>Home</li>
            <li className='border-b-2 border-zinc-300 w-full'>My blogs</li>
            <div className='flex flex-col my-4'>
                <button className='px-8 py-3'>
                    Sign In
                </button>
            </div>
        </ul>
    </div>
  )
}

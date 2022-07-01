import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Signin from '../../components/Signin'
import Signup from '../../components/Signup'

export default function Loginpage() {
  
  return (
    <div className='w-full h-screen overflow-y-scroll  '>
        
      <div className="container mx-auto px-4 h-full my-32">
        <div className="flex content-center items-center justify-center h-full">
          
          
          <Outlet/>
        </div>
      </div>
        
        

    </div>
  )
}

import React from 'react'
import img from '../assets/imgcard.jpg'

export default function BlogContent() {
  return (
    <div className='w-full  h-screen'>
        <div className='w-full h-auto'>
            <h1 className=' font-mono font-bold text-6xl text-center'>Title</h1>
            <div className='flex justify-center'>
            <img class="w-10 h-10 rounded-full" src={img} alt="Rounded avatar"/>
            <p className=' text-center align-middle'>Author: </p>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import Hero from '../../components/Hero'
import PostLists from '../../components/PostLists'

export default function Home() {
  return (
    <>
        <Hero/>
        <div className='flex justify-center mx-32 py-32'>
          <PostLists/>
        </div>
        
        
    </>
    
  )
}

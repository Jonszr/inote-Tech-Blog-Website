import React from 'react'
import Banner from '../../components/Banner'
import PostLists from '../../components/PostLists'
import ProfileCard from '../../components/ProfileCard'
import BlogContent from '../../components/BlogContent'

export default function Myblog() {
  return (
    
        <div className='h-auto bg-zinc-200'>
            <div className=' flex pt-20'>
                
                <div className=' h-auto w-screen flex flex-col px-[15%] gap-y-4'>
                    <div className='h-auto '>
                        <Banner/>
                    </div>
                    <div className='h-auto flex flex-rol flex-wrap lg:flex-nowrap lg:flex lg:gap-4'>
                        
                        <BlogContent/>
                        {/* <PostLists/> */}
                        
                        <div className='w-[100%] lg:w-[30%]'>

                            {/* side bar */}
                            <ProfileCard/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
      
  )
}

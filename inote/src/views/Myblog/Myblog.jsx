import React from 'react'
import Banner from '../../components/Banner'
import PostLists from '../../components/PostLists'
import ProfileCard from '../../components/ProfileCard'
import BlogContent from '../../components/BlogContent'
import EditPorfile from '../../components/EditPorfile'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar'

export default function Myblog() {
    return (

        <div className='h-auto bg-zinc-200'>
            <div className=' flex pt-20'>

                <div className=' h-auto w-screen flex flex-col px-[15%] gap-y-4'>
                    <div className='h-auto '>
                        <Banner />
                    </div>
                    <div className='h-auto flex flex-row flex-wrap lg:flex-nowrap lg:flex lg:gap-4'>
                        
                            <Outlet />
                        
                        <div className=' w-full h-auto lg:w-[30%] mb-20 '>

                            {/* side bar */}

                            <div className=' sticky top-40'>
                                <ProfileCard />
                                <SideBar />
                            </div>

                        </div>
                    </div>
                    <div className=' flex justify-center items-center w-20 h-20 sticky bottom-[10%] rounded-full left-[90%] bg-white border border-solid border-indigo-600 mb-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                        </svg>
                    </div>
                </div>


            </div>
        </div>

    )
}

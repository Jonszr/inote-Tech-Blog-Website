import React from 'react'
import img from '../assets/imgcard.jpg'

export default function BlogContent() {
  return (
    <div className='w-full mt-12  h-screen'>
        <div className='w-full h-auto p-8 bg-white rounded-lg'>
            <h1 className=' py-8 font-mono font-bold text-6xl text-center'>Title</h1>
            <div className='flex justify-center'>
              <img className="h-20 w-20 object-cover  rounded-full" src={img} alt="Rounded avatar"/>
              <div className='text-center text-2xl self-center  ml-5'>
                <p className=' '>Author: Jon Shi</p>
                <p className=' '>Date: 2022/07/30</p>
              </div>
              
            </div>
            <div className=' p-8 rounded-lg bg-white border border-zinc-300  mt-10'>
                <h1 className='text-lg font-bold'>Content</h1>
                <p className=' break-words  h-auto'>
                hello, this is introduction Part............
                .............................................
                ...........................................
                ............................................
                .....................................................................................................................................................................................................................................................................................
                </p>
                
            </div>
            <div className=' border border-zinc-300 p-8 my-8 rounded-2xl'>
                <form>
                  <label  className="sr-only">Your message</label>
                  <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                      <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                      </button>
                      <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"></path></svg>
                      </button>
                      <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                          <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                          <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                      </button>
                  </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

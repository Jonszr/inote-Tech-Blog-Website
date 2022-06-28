import React from 'react'
import img from '../assets/imgcard.jpg'

export default function ProfileCard() {
  return (
    <div class="w-full mx-auto max-w-xl mt-11 rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 py-4 text-gray-800 dark:text-gray-50">
        <div class="w-full pt-1 text-center -mt-16 mx-auto">
            <a href="#" class="block relative">
                <img alt="profil" src={img} class="mx-auto object-cover rounded-full h-20 w-20 "/>
            </a>
        </div>
        <div class="w-full">
            <div class="text-center mb-6">
                <p class="text-gray-800 dark:text-white text-xl font-medium">
                    John Jackson
                </p>
                <p class="text-gray-400 text-xs">
                    FullStack dev
                </p>
            </div>
            <div class="rounded-lg bg-pink-100 w-full dark:bg-white p-2  mb-4">
                <div class="flex items-center justify-center  gap-4 text-xs text-gray-400 dark:text-black">
                    <p class="flex flex-col">
                        Blo.
                        <span class="text-black dark:text-indigo-500 font-bold">
                            34
                        </span>
                    </p>
                    <p class="flex flex-col">
                        Foll.
                        <span class="text-black dark:text-indigo-500 font-bold">
                            455
                        </span>
                    </p>
                    <p class="flex flex-col">
                        Rat.
                        <span class="text-black dark:text-indigo-500 font-bold">
                            9.3
                        </span>
                    </p>
                </div>
            </div>
            <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Add
            </button>
        </div>
    </div>
  )
}

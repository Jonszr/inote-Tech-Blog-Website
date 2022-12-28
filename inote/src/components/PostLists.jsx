import React from "react";
import { NavLink, useOutletContext, useParams } from "react-router-dom";
import { useGetPostsByUserQuery } from "../store/userApi";
import Loading from "../views/Loading";
import NotFound from "../views/NotFound";
import PostCard from "./PostCard";

export default function PostLists() {
  const { isUser, data,isPostsSuccess,postsError,postsdata } = useOutletContext();

  
  

  return (
    <>
      {postsError && <NotFound/>}
      {isPostsSuccess ? (
        <div className=" w-full h-auto">
            
          {/* Search Bar */}

          <div className=" w-full flex flex-wrap items-end justify-evenly   rounded-3xl border shadow-md shadow-zinc-400 p-5 mt-10 mb-10 bg-white">
            <div className="title">
              <p className="text-4xl font-bold text-gray-800 mb-4">
                Lastest articles
              </p>
              <p className="hidden lg:flex text-2xl font-light text-gray-400">
                All article are verified by 2 experts and valdiate by the CTO
              </p>
            </div>
            <div className="text-end  ">
              <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                <div className=" flex items-center  ">
                  <input
                    type="text"
                    id=""
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="Enter a title"
                  />
                </div>
                <button className="bg-indigo-600 px-8 py-3" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          {/* lists of post cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            
            { postsdata.map((post)=>{
                return <PostCard key={post._id} post={post} isUser={isUser}/>
              
            })}
            {/* <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink>

            <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink>
            <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink>
            <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink>
            <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink>
            <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink>
            <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink>
            <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink>
            <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink>
            <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink>
            <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink>
            <NavLink to={"/usercenter/blogdetail"}>
              <PostCard />
            </NavLink> */}
          </div>

          <div className="flex flex-wrap justify-center py-4">
            <a
              href="#"
              className="inline-flex items-center py-2 px-4 mr-3  text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              Previous
            </a>
            <a
              href="#"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              Next
            </a>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

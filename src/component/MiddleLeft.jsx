import React, { useState } from 'react'
import { BsBarChartLineFill, BsBookmarkFill, BsFillCalendar2EventFill, BsFillCameraVideoFill, BsFillCloudDrizzleFill, BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import { ImUsers } from 'react-icons/im'
import { MdRecentActors } from 'react-icons/md'
import { SiDart, SiDeliveroo, SiMarketo } from 'react-icons/si'
import { IoStopwatchSharp } from 'react-icons/io5'
import { FaChild, FaMemory } from 'react-icons/fa'
import { AiFillFlag, AiFillHeart, AiFillStar, AiOutlineWechat } from 'react-icons/ai'
import { FcPhotoReel } from 'react-icons/fc'
import { FiChevronDown, FiChevronsDown } from 'react-icons/fi'
import { HiSpeakerphone, HiUserGroup } from 'react-icons/hi'
import { RiGameFill, RiMessengerFill } from 'react-icons/ri'
export const MiddleLeft = ({showmore}) => {
  let [show,setShow] = useState(false);
  return (
    <div className='w-fit'>
      <div className={`transition-all duration-300 ease-linear ${!show ? 'h-[75vh] overflow-hidden' : 'h-[100vh] overflow-auto'} relative w-96 xs:hidden lg:flex items-start flex-col justify-start font-Quicksand mt-[74px]`}>
        <li className='flex items-center justify-start p-3 bg-g8een-400 w-[98%] hover:bg-zinc-200 mx-auto cursor-pointer'><CiUser className='text-3xl' /><p className='ml-3 text-md font-bold'>Bereket Alemayehu</p></li>
        <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><ImUsers className='text-3xl' /><p className='ml-3 text-md font-bold'>Friends</p></li>
        <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsFillCalendar2EventFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Events</p></li>
        <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><MdRecentActors className='text-3xl' /><p className='ml-3 text-md font-bold'>Most recent</p></li>
        <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><HiUserGroup className='text-3xl' /><p className='ml-3 text-md font-bold'>Groups</p></li>
        <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><SiMarketo className='text-3xl' /><p className='ml-3 text-sm font-bold'>Marketplace</p></li>
        <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><IoStopwatchSharp className='text-3xl' /><p className='ml-3 text-md font-bold'>Watch</p></li>
        <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><FaMemory className='text-3xl' /><p className='ml-3 text-md font-bold'>Memories</p></li>
        <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsBookmarkFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Saved</p></li>
        <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><AiFillFlag className='text-3xl' /><p className='ml-3 text-md font-bold'>Pages</p></li>
        <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><FcPhotoReel className='text-3xl' /><p className='ml-3 text-md font-bold'>Reels</p></li>
        <li onClick={() => setShow(!show)} className='flex items-center justify-start p-3 w-[99%] hover:bg-zinc-200 mx-auto cursor-pointer'><FiChevronDown className='text-3xl' /><p className='ml-3 text-md font-bold'>Show more</p></li>
          <div className={show ? `block w-96` : `hidden w-96`}>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><FiChevronsDown className='text-3xl' /><p className='ml-3 text-md font-bold'>Ad Center</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><HiSpeakerphone className='text-3xl' /><p className='ml-3 text-md font-bold'>Ads Manager</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsBarChartLineFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Climate Science Center</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsFillCloudDrizzleFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Crisis Response</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><SiDart className='text-3xl' /><p className='ml-3 text-md font-bold'>Favorites</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><AiFillStar className='text-3xl' /><p className='ml-3 text-md font-bold'>Fundrasis</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><AiFillHeart className='text-3xl' /><p className='ml-3 text-md font-bold'>Love</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><RiGameFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Gaming Video</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsFillCameraVideoFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Live Video</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><SiDeliveroo className='text-3xl'  /><p className='ml-3 text-md font-bold'>Messenger</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><RiMessengerFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Likes</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><FaChild className='text-3xl' /><p className='ml-3 text-md font-bold'>Kids</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsFillCreditCard2FrontFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Order and payments</p></li>
              <li className='flex items-center justify-start p-3 w-[99%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><AiOutlineWechat className='text-3xl' /><p className='ml-3 text-md font-bold'>Recent activities</p></li> 
          </div>
    </div>
    {/* mobile */}
    <div className={`absolute z-[100] bg-white transition-all duration-300 ease-linear ${showmore ? 'xs:flex' : 'xs:hidden'} ${!show ? 'h-[90vh] overflow-hidden' : 'h-[104vh] overflow-auto'} xs:w-[99%] left-0 top-0 lg:hidden items-start flex-col justify-start font-Quicksand mt-[64px]`}>
        <li className='flex items-center justify-start p-3 bg-g8een-400 w-[98%] hover:bg-zinc-200 mx-auto cursor-pointer'><CiUser className='text-3xl' /><p className='ml-3 text-md font-bold'>Bereket Alemayehu</p></li>
        <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><ImUsers className='text-3xl' /><p className='ml-3 text-md font-bold'>Friends</p></li>
        <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsFillCalendar2EventFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Events</p></li>
        <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><MdRecentActors className='text-3xl' /><p className='ml-3 text-md font-bold'>Most recent</p></li>
        <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><HiUserGroup className='text-3xl' /><p className='ml-3 text-md font-bold'>Groups</p></li>
        <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><SiMarketo className='text-3xl' /><p className='ml-3 text-sm font-bold'>Marketplace</p></li>
        <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><IoStopwatchSharp className='text-3xl' /><p className='ml-3 text-md font-bold'>Watch</p></li>
        <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><FaMemory className='text-3xl' /><p className='ml-3 text-md font-bold'>Memories</p></li>
        <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsBookmarkFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Saved</p></li>
        <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><AiFillFlag className='text-3xl' /><p className='ml-3 text-md font-bold'>Pages</p></li>
        <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><FcPhotoReel className='text-3xl' /><p className='ml-3 text-md font-bold'>Reels</p></li>
        <li onClick={() => setShow(!show)} className='flex items-center justify-start p-3 w-[99%] hover:bg-zinc-200 mx-auto cursor-pointer'><FiChevronDown className='text-3xl' /><p className='ml-3 text-md font-bold'>Show more</p></li>
        <div className={show ? `block w-full` : `hidden w-full`}>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><FiChevronsDown className='text-3xl' /><p className='ml-3 text-md font-bold'>Ad Center</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><HiSpeakerphone className='text-3xl' /><p className='ml-3 text-md font-bold'>Ads Manager</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsBarChartLineFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Climate Science Center</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsFillCloudDrizzleFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Crisis Response</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><SiDart className='text-3xl' /><p className='ml-3 text-md font-bold'>Favorites</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><AiFillStar className='text-3xl' /><p className='ml-3 text-md font-bold'>Fundrasis</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><AiFillHeart className='text-3xl' /><p className='ml-3 text-md font-bold'>Love</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><RiGameFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Gaming Video</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsFillCameraVideoFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Live Video</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><SiDeliveroo className='text-3xl'  /><p className='ml-3 text-md font-bold'>Messenger</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><RiMessengerFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Likes</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><FaChild className='text-3xl' /><p className='ml-3 text-md font-bold'>Kids</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><BsFillCreditCard2FrontFill className='text-3xl' /><p className='ml-3 text-md font-bold'>Order and payments</p></li>
              <li className='flex items-center justify-start p-3 w-[96%] hover:bg-[rgba(0,0,0,.05)] mx-auto cursor-pointer'><AiOutlineWechat className='text-3xl' /><p className='ml-3 text-md font-bold'>Recent activities</p></li> 
      </div>
    </div>
    </div>
  )
}

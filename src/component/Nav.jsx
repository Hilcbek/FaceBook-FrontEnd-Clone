import React from 'react'
import { FiFacebook} from 'react-icons/fi'
import { BiSearchAlt2 } from 'react-icons/bi'
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineUsers } from 'react-icons/hi'
import { BsLaptop } from 'react-icons/bs'
import { RxBackpack } from 'react-icons/rx'
import { SlGameController } from 'react-icons/sl'
import { CgMenuGridO } from 'react-icons/cg'
import { RiMessengerFill } from 'react-icons/ri'
import { HiBellAlert } from 'react-icons/hi2'
import { CiUser } from 'react-icons/ci'
export const Nav = ({setShowMore,showmore}) => {
  return (
    <nav className='flex items-center justify-between fixed pt-2 z-[1000] xs:px-2 lg:px-5 bg-white w-screen'>
        <ul className='flex items-center justify-center'>
            <ul className='flex items-center justify-center rounded-full bg-blue-600 p-2'>
                <FiFacebook className='text-white text-3xl' />
            </ul>
            <ul className='ml-1 flex xs:p-3 rounded-full items-center justify-center relative xl:bg-transparent xs:bg-zinc-200'>
                <BiSearchAlt2 className='text-2xl xl:absolute left-8' />
                <input type="search" name="search" id="" className='xs:hidden xl:inline-block p-2 bg-zinc-100 rounded-3xl w-68 outline-none ml-3 pl-10' placeholder='Search facebook' />
            </ul>
        </ul>
        <ul className='xs:hidden sm:flex items-center justify-center'>
            <li className='relative before:absolute before:left-0 before:w-full before:h-1 before:-bottom-1 before:rounded-md before:bg-blue-500 before:content-[""] p-3 cursor-pointer xs:w-fit xs:px-6 lg:w-32 mx-2 rounded-lg hover:bg-zinc-200 flex items-center justify-center'>
                <AiFillHome className='text-3xl text-blue-600' />
            </li>
            <li className='p-3 cursor-pointer xs:w-fit xs:px-6 lg:w-32 mx-2 rounded-lg hover:bg-zinc-100 flex items-center justify-center'>
                <HiOutlineUsers className='text-3xl' />
            </li>
            <li className='p-3 cursor-pointer xs:w-fit xs:px-6 lg:w-32 mx-2 rounded-lg hover:bg-zinc-100 flex items-center justify-center'>
                <BsLaptop className='text-3xl' />
            </li>
            <li className='p-3 cursor-pointer xs:w-fit xs:px-6 lg:w-32 mx-2 rounded-lg hover:bg-zinc-100 flex items-center justify-center'>
                <RxBackpack className='text-3xl' />
            </li>
            <li className='p-3 cursor-pointer xs:w-fit xs:px-6 lg:w-32 mx-2 rounded-lg hover:bg-zinc-100 flex items-center justify-center'>
                <SlGameController className='text-3xl' />
            </li>
        </ul>
        <div onClick={() => setShowMore(!showmore)} className='p-2 hover:bg-zinc-100 rounded-md cursor-pointer mx-1'><AiOutlineMenu className='text-3xl xs:inline-block lg:hidden' /></div>
        <ul className='flex items-center justify-center'>
            <li className='flex items-center justify-center cursor-pointer m-1 p-3 rounded-full bg-zinc-200'><CgMenuGridO className='text-2xl' /></li>
            <li className='flex items-center justify-center cursor-pointer m-1 p-3 rounded-full bg-zinc-200'><RiMessengerFill className='text-2xl' /></li>
            <li className='relative before:absolute before:content-["20%"] before:w-10 before:h-5 before:bg-red-500 before:text-white before:-top-2 before:rounded-3xl before:text-sm before:text-center before:left-8 flex items-center justify-center cursor-pointer m-1 p-3 rounded-full bg-zinc-200'><HiBellAlert className='text-2xl' /></li>
            <li className='flex items-center justify-center cursor-pointer m-1 p-3 rounded-full bg-zinc-200'><CiUser className='text-2xl' /></li>
        </ul>
    </nav>
  )
}

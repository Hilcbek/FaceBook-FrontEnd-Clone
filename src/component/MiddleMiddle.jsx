import React from 'react'
import one from '../images/one.jpg'
import two from '../images/two.jpg'
import three from '../images/three.jpg'
import four from '../images/four.jpg'
import five from '../images/five.jpg'
import six from '../images/six.jpg'
import seven from '../images/seven.jpg'
import eight from '../images/eight.jpg'
import nine from '../images/nine.jpg'
import ten from '../images/ten.jpg'
import eleven from '../images/eleven.jpg'
import twelve from '../images/twelve.jpg'
import t from '../images/t.jpg'
import f from '../images/f.jpg'
import { TfiComment} from 'react-icons/tfi'
import {IoMdHappy } from 'react-icons/io'
import { HiUserCircle } from 'react-icons/hi'
import { RiLiveFill, RiMessengerLine, RiVideoAddFill } from 'react-icons/ri'
import { HiPhoto } from 'react-icons/hi2'
import { BsFillEmojiHeartEyesFill, BsFillEmojiWinkFill, BsHandThumbsUp, BsThreeDots } from 'react-icons/bs'
import { AiFillHeart, AiFillLike, AiOutlineClose } from 'react-icons/ai'
export const MiddleMiddle = () => {
  return (
        <div className='xs:w-11/12 mx-auto lg:w-5/12 h-[110vh] overflow-auto'>
              <div className='mt-[70px] overflow-x-scroll lg:w-full overflow-y-hidden flex items-start justify-start flex-col'>
                <div className='flex w-fit py-3 pl-3'>
                    <div className='w-36 cursor-pointer hover:scale-105 scale-100 duration-500 rounded-xl h-64 bg-green relative mx-1'>
                        <div className='left-2 top-2 w-12 absolute h-12 rounded-full border-4 border-solid border-blue-600'>
                            <img src={one} className={'w-full rounded-full h-full'} alt="" />
                        </div>
                        <img src={two} className={'rounded-xl w-full h-full object-cover'} alt="" />
                    </div>
                    <div className='w-36 cursor-pointer hover:scale-105 scale-100 duration-500 rounded-xl h-64 bg-green relative mx-1'>
                        <div className='left-2 top-2 w-12 absolute h-12 rounded-full border-4 border-solid border-blue-600'>
                            <img src={three} className={'w-full rounded-full h-full'} alt="" />
                        </div>
                        <img src={four} className={'rounded-xl w-full h-full object-cover'} alt="" />
                    </div>
                    <div className='w-36 cursor-pointer hover:scale-105 scale-100 duration-500 rounded-xl h-64 bg-green relative mx-1'>
                        <div className='left-2 top-2 w-12 absolute h-12 rounded-full border-4 border-solid border-blue-600'>
                            <img src={five} className={'w-full rounded-full h-full'} alt="" />
                        </div>
                        <img src={six} className={'rounded-xl w-full h-full object-cover'} alt="" />
                    </div>
                    <div className='w-36 cursor-pointer hover:scale-105 scale-100 duration-500 rounded-xl h-64 bg-green relative mx-1'>
                        <div className='left-2 top-2 w-12 absolute h-12 rounded-full border-4 border-solid border-blue-600'>
                            <img src={seven} className={'w-full rounded-full h-full'} alt="" />
                        </div>
                        <img src={eight} className={'rounded-xl w-full h-full object-cover'} alt="" />
                    </div>
                    <div className='w-36 cursor-pointer hover:scale-105 scale-100 duration-5xl h-64 bg-green relative mx-1'>
                        <div className='left-2 top-2 w-12 absolute h-12 rounded-full border-4 border-solid border-blue-600'>
                            <img src={nine} className={'w-full rounded-full h-full'} alt="" />
                        </div>
                        <img src={ten} className={'rounded-xl w-full h-full object-cover'} alt="" />
                    </div>
                    <div className='w-36 cursor-pointer hover:scale-105 scale-100 duration-500 rounded-xl h-64 bg-green relative mx-1'>
                        <div className='left-2 top-2 w-12 absolute h-12 rounded-full border-4 border-solid border-blue-600'>
                            <img src={eleven} className={'w-full rounded-full h-full'} alt="" />
                        </div>
                        <img src={twelve} className={'rounded-xl w-full h-full object-cover'} alt="" />
                    </div>
                    <div className='w-36 cursor-pointer hover:scale-105 scale-100 duration-500 rounded-xl h-64 bg-green relative mx-1'>
                        <div className='left-2 top-2 w-12 absolute h-12 rounded-full border-4 border-solid border-blue-600'>
                            <img src={t} className={'w-full rounded-full h-full'} alt="" />
                        </div>
                        <img src={f} className={'rounded-xl w-full h-full object-cover'} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center flex-col bg-white p-2 rounded-md'>
                <div className='w-full flex items-center justify-start'>
                    <div className='p-2 flex items-center justify-center bg-slate-300 rounded-full'>
                        <HiUserCircle className='text-3xl text-white' />
                    </div>
                    <input type="text" name="same" className='ml-2 w-[97%] p-3 rounded-3xl bg-zinc-100 outline-none' placeholder='What`s on your mind, Bereket?' id="" />
                </div>
                <div className='w-full flex items-center justify-around my-2'>
                    <div className='flex items-center justify-center my-2 p-2 rounded-md duration-300 cursor-pointer hover:bg-[aliceblue]'>
                        <RiLiveFill className='xs:text-xl sm:text-3xl text-red-500' />
                        <p className='xs:text-[10px] sm:text-md font-Quicksand ml-2 font-bold'>Live video</p>
                    </div>
                    <div className='flex items-center justify-center my-2 p-2 rounded-md duration-300 cursor-pointer hover:bg-[aliceblue]'>
                        <HiPhoto className='xs:text-xl sm:text-3xl text-green-500' />
                        <p className='xs:text-[10px] sm:text-md font-Quicksand ml-2 font-bold'>Photo/video</p>
                    </div>
                    <div className='flex items-center justify-center my-2 p-2 rounded-md duration-300 cursor-pointer hover:bg-[aliceblue]'>
                        <IoMdHappy className='xs:text-xl sm:text-3xl text-yellow-500' />
                        <p className='xs:text-[10px] sm:text-md font-Quicksand ml-2 font-bold'>Feeling/activity</p>
                    </div>
                </div>
            </div>
            <div className='p-3 rounded-md bg-white my-3'>
                <div className='flex items-center justify-start rounded-3xl hover:border-solid hover:border-indigo-600 border-[1px] w-fit hover:bg-[aliceblue] cursor-pointer p-2'>
                    <RiVideoAddFill className='mr-2 text-indigo-600' />
                    <p className='font-Quicksand  font-bold xs:text-sm sm:text-xl'>Create Room</p>
                </div>
            </div>
            <div className='w-fit'>
                <div className='w-full my-2 flex items-start justify-between'>
                    <div className='flex p-2'>
                        <div className='flex items-start justify-start'>
                            <div className='w-10 h-10 rounded-full'>
                                <img src={one} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className='ml-3 flex items-start justify-start flex-col'>
                                <div>
                                    <p className='xs:text-sm sm:text-xl font-Quicksand'>I am a programmer & I have no life...</p>
                                </div>
                                <div className='flex items-center justify-center text-sm text-zinc-500'>
                                    <p>Bereket alex</p>
                                    <p className='mx-2'>6h</p>
                                    <BsFillEmojiWinkFill />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <BsThreeDots className='text-2xl mx-1 cursor-pointer' />
                        <AiOutlineClose className='text-2xl mx-1 cursor-pointer' />
                    </div>
                </div>
                <div className='rounded-xl w-[98%] mx-auto'>
                    <img src={three} className={'rounded-xl w-full h-full object-cover'} alt="" />
                </div>
                <div className='w-full flex items-center justify-start flex-col'>
                    <div className='w-full flex items-center justify-start my-2'>
                        <div className='bg-blue-500 rounded-full p-1 ml-1'><AiFillLike className='text-white xs:text-sm sm:text-xl' /></div>
                        <div className='bg-red-500 rounded-full p-1 -mx-1'><AiFillHeart className='text-white xs:text-sm sm:text-xl' /></div>
                        <div className='bg-yellow-500 rounded-full p-1 -mx-1'><BsFillEmojiHeartEyesFill className='text-white xs:text-sm sm:text-xl' /></div>
                    </div>
                    <div className='w-full flex items-center xs:justify-around sm:justify-between mx-5 my-2'>
                        <div className='cursor-pointer flex items-center justify-center'>
                            <BsHandThumbsUp className='mr-1 text-xl' />
                            <p>Like</p>
                        </div>
                        <div className='cursor-pointer flex items-center justify-center'>
                            <TfiComment className='mr-1 text-xl' />
                            <p>Comment</p>
                        </div>
                        <div className='cursor-pointer flex items-center justify-center'>
                            <RiMessengerLine className='mr-1 text-xl' />
                            <p>Send</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-full my-2 flex items-start justify-between'>
                    <div className='flex p-2'>
                        <div className='flex items-start justify-start'>
                            <div className='w-10 h-10 rounded-full'>
                                <img src={twelve} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className='ml-3 flex items-start justify-start flex-col'>
                                <div>
                                    <p className='xs:text-sm sm:text-xl font-Quicksand'>I am a Doctor & I have no life...</p>
                                </div>
                                <div className='flex items-center justify-center text-sm text-zinc-500'>
                                    <p>Donner Conner</p>
                                    <p className='mx-2'>2h</p>
                                    <BsFillEmojiWinkFill />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <BsThreeDots className='text-2xl mx-1 cursor-pointer' />
                        <AiOutlineClose className='text-2xl mx-1 cursor-pointer' />
                    </div>
                </div>
                <div className='rounded-xl w-[98%] mx-auto h-full'>
                    <img src={four} className={'rounded-xl w-full h-full object-cover'} alt="" />
                </div>
                <div className='w-full flex items-center justify-start flex-col'>
                    <div className='w-full flex items-center justify-start my-2'>
                        <div className='bg-blue-500 rounded-full p-1 ml-1'><AiFillLike className='text-white xs:text-sm sm:text-xl' /></div>
                        <div className='bg-red-500 rounded-full p-1 -mx-1'><AiFillHeart className='text-white xs:text-sm sm:text-xl' /></div>
                        <div className='bg-yellow-500 rounded-full p-1 -mx-1'><BsFillEmojiHeartEyesFill className='text-white xs:text-sm sm:text-xl' /></div>
                    </div>
                    <div className='w-full flex items-center xs:justify-around sm:justify-between mx-5 my-2'>
                        <div className='cursor-pointer flex items-center justify-center'>
                            <BsHandThumbsUp className='mr-1 text-xl' />
                            <p>Like</p>
                        </div>
                        <div className='cursor-pointer flex items-center justify-center'>
                            <TfiComment className='mr-1 text-xl' />
                            <p>Comment</p>
                        </div>
                        <div className='cursor-pointer flex items-center justify-center'>
                            <RiMessengerLine className='mr-1 text-xl' />
                            <p>Send</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='w-full my-2 flex items-start justify-between'>
                    <div className='flex p-2'>
                        <div className='flex items-start justify-start'>
                            <div className='w-10 h-10 rounded-full'>
                                <img src={t} alt="" className='w-full h-full rounded-full' />
                            </div>
                            <div className='ml-3 flex items-start justify-start flex-col'>
                                <div>
                                    <p className='xs:text-sm sm:text-xl font-Quicksand'>I am a Grapics Designer & I have no life...</p>
                                </div>
                                <div className='flex items-center justify-center text-sm text-zinc-500'>
                                    <p>Nick Sulevan</p>
                                    <p className='mx-2'>4h</p>
                                    <BsFillEmojiWinkFill />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <BsThreeDots className='text-2xl mx-1 cursor-pointer' />
                        <AiOutlineClose className='text-2xl mx-1 cursor-pointer' />
                    </div>
                </div>
                <div className='rounded-xl w-[98%] mx-auto h-full'>
                    <img src={six} className={'rounded-xl w-full h-full object-cover'} alt="" />
                </div>
                <div className='w-full flex items-center justify-start flex-col'>
                    <div className='w-full flex items-center justify-start my-2'>
                        <div className='bg-blue-500 rounded-full p-1 ml-1'><AiFillLike className='text-white xs:text-sm sm:text-xl' /></div>
                        <div className='bg-red-500 rounded-full p-1 -mx-1'><AiFillHeart className='text-white xs:text-sm sm:text-xl' /></div>
                        <div className='bg-yellow-500 rounded-full p-1 -mx-1'><BsFillEmojiHeartEyesFill className='text-white xs:text-sm sm:text-xl' /></div>
                    </div>
                    <div className='w-full flex items-center xs:justify-around sm:justify-between mx-5 my-2'>
                        <div className='cursor-pointer flex items-center justify-center'>
                            <BsHandThumbsUp className='mr-1 text-xl' />
                            <p>Like</p>
                        </div>
                        <div className='cursor-pointer flex items-center justify-center'>
                            <TfiComment className='mr-1 text-xl' />
                            <p>Comment</p>
                        </div>
                        <div className='cursor-pointer flex items-center justify-center'>
                            <RiMessengerLine className='mr-1 text-xl' />
                            <p>Send</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

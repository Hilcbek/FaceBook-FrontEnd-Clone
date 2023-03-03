import React from 'react'
import { MiddleLeft } from './MiddleLeft'
import { MiddleMiddle } from './MiddleMiddle'
import { MiddleRight } from './MiddleRight'

export const Middle = ({showmore}) => {
  return (
    <div className='w-screen h-auto flex items-start justify-between overflow-x-hidden'>
        <MiddleLeft showmore={showmore} />
        <MiddleMiddle />
        <MiddleRight /> 
    </div>
  )
}

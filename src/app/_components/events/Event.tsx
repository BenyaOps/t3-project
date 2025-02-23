"use client"

import React from 'react'
import Card from './Card'

type IProps = {
    isTop?: boolean
}
const Event = ({isTop}: IProps) => {
  return (
    <div className='event flex mb-4'>
        <div className='time w-1/4'>
            <p className='text-yellow2 text-xl font-semibold'>04 Feb</p>
            <p className='text-grey2 text-xl font-semibold'>Martes / 8pm</p>
        </div>
        <div className='details w-3/4'>
            <Card top={isTop} />
        </div>
    </div>
  )
}

export default Event
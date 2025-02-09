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
            <p>04 Feb</p>
            <p>Martes / 8pm</p>
        </div>
        <div className='details w-3/4'>
            <Card top={isTop} />
        </div>
    </div>
  )
}

export default Event
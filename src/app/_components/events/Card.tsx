"use client"

import React from 'react'
import GeoIcon from '../icons/GeoIcon'
import UserIcon from '../icons/UserIcon'
import Button from '../shared/Button'

type IProps = {
    top?: boolean
}
const Card = ({top = false}: IProps) => {
  return (
    <div className='card'>
        <div className="left">
            <p className="title">Noche de Bar</p>
            <div className="details">
                <p><GeoIcon /> 50 asistentes</p>
                <p><GeoIcon /> Lima Miraflores Av. Paz</p>
                <p className='text-yellow2'><UserIcon /> 50 asistentes</p>
            </div>
            <Button gray={true} >
                Unirme <img  className='inline-block' src="assets/img/arrow-right.png" alt="arrow" width={16} />
            </Button>
        </div>
        <div className="right">
            <img src="assets/img/beer.png" alt="beer" width={182} />
        </div>
        {top && <div className="top">Top</div>}
    </div>
  )
}

export default Card
import React from 'react'

type IProps = {
    top?: boolean
}
const Card = ({top = false}: IProps) => {
  return (
    <div className='card'>
        <div className="left">
            <p className="title">Noche de Bar</p>
            <div className="details">
                <p>Fecha: 12/12/2020</p>
                <p>Hora: 20:00</p>
                <p>Lugar: Bar de la esquina</p>
            </div>
            <div className="button">
                <button className='button'>Unirme <img src="assets/img/arrow-right.png" alt="arrow" width={30} /> </button>
            </div>
        </div>
        <div className="right">
            <img src="assets/img/beer.png" alt="beer" width={100} />
        </div>
        {top && <div className="top">Top</div>}
    </div>
  )
}

export default Card
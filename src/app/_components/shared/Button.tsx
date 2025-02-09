import React from 'react'

type IProps = {
    children: React.ReactNode,
    hover?: boolean
    onClick?: () => void
    active?: boolean
    gray?: boolean
    disabled?: boolean
    }

const Button = ({children, onClick, active, disabled,gray, hover}: IProps) => {
  return (
    <>
    <button onClick={onClick} 
    className={`button rounded-md ${gray ? 'btn-gray' : 'btn-primary'} ${active ? 'bg-primary text-white' : ''} ${hover ? 'hover' : ''}`}
    disabled={disabled}>
        {children}
    </button>
    </>
  )
}

export default Button
import React from 'react'

const TopNav = () => {
  return (
    <nav className='flex justify-between items-center p-4 bg-gray-800 text-white'>
        <div className='text-xl font-bold'>Logo</div>
        <div>
            <ul className='flex space-x-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default TopNav
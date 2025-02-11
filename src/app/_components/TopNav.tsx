import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
// import { UploadButton } from '~/utils/uploadthing'
import { SimpleUploadButton } from './simole-upload-button'
import LogoIcon from './svg/Logo'
import TicketIcon from './svg/Ticket'
import UserLogin from './UserLogin'

const TopNav = () => {

  return (
    <>
    <nav className='flex justify-between items-center p-4 bg-gray-800 text-white'>
        <div className='text-xl font-bold'>
          <LogoIcon />  
        </div>
        <div>
            <ul className='flex space-x-4'>
            <li><TicketIcon/> Eventos</li>
            <li><TicketIcon/>Calendario</li>
            <li><TicketIcon/>Proximamente</li>
            </ul>
        </div>
        <div className='flex flex-row'>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SimpleUploadButton />
            <UserButton />
          </SignedIn>
        </div>
    </nav>
    <UserLogin />
    </>
  )
}

export default TopNav
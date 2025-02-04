import { SignedOut, SignedIn, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { UploadButton } from '~/utils/uploadthing'
import { SimpleUploadButton } from './simole-upload-button'

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
  )
}

export default TopNav
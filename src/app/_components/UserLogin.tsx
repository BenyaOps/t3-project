"use client";

import { useUser } from '@clerk/nextjs'
import React from 'react'

const UserLogin = () => {
    const [userLogged, setUserLogged] = React.useState(null);
    const [counter, setCounter] = React.useState(0);
    const { isSignedIn, user, isLoaded } = useUser();

    
    if (!isLoaded) {
        return <div>Loading...</div>
    }
    
    if (!isSignedIn) {
    return <div>Sign in to view this page</div>
    }
    
    if(isLoaded && isSignedIn) {
        console.log(user);
        return <div>Hello {user.firstName}!</div>
    }
}


export default UserLogin
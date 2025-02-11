import React from 'react'
import Event from '../_components/events/Event'
import { createUser } from '~/server/queries'

const EventsPage = async () => {
  const user = await createUser();
  //console.log(user);
  
  return (
    <div>
      <div className="container m-auto max-w-[800px]">
        <h1>Events</h1>
        <small>{JSON.stringify(user)}</small>
        <Event isTop={true} />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  )
}

export default EventsPage
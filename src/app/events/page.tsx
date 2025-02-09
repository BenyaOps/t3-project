import React from 'react'
import Event from '../_components/events/Event'

const EventsPage = () => {
  return (
    <div>
      <div className="container m-auto max-w-[800px]">
        <h1>Events</h1>
        <Event isTop={true} />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  )
}

export default EventsPage
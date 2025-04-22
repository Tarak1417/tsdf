import React from 'react'
import Navbar from './Navbar'
import ProfileHeader from './ProfileHeader'
import TasksSection from './TasksSection'
import NewsSection from './NewsSection'
import EventsSection from './EventsSection'
import BirthdaySection from './BirthdaySection'
import QuickLinks from './QuickLinks'

const Home = () => {
  return (
    <div>
      {/* Fixed Navbar */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Content with top margin to offset fixed Navbar */}
      <div style={{ marginTop: '70px' }}> {/* Adjust based on Navbar height */}
        <ProfileHeader />
        <TasksSection />
        <NewsSection />
        <EventsSection />
        <BirthdaySection />
        <QuickLinks />
      </div>
    </div>
  )
}

export default Home

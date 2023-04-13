import React from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

const Home = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
        <Header />
        <div className='flex'>
      <Sidebar />
     
      </div>
    </div>
  )
}

export default Home
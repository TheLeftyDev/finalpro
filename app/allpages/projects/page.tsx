import React from 'react'
import Navbar from '../../../Components/Navbar'
import Footer from '../../../Components/Footer'
import CouldntFind from '../../../Components/CouldntFind'
import Bg2Projects from '@/app/../Components/Bg2Projects'
import BgOurProjects from '@/app/../Components/BgOurProjects'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Bg2Projects/>
      <BgOurProjects/>
      <CouldntFind page={'2'}/>
      <Footer page={'1'}/>
    </div>
  )
}

export default Projects
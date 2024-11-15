import Contact from '@/components/sections/Contact'
import HeroSection from '@/components/sections/HeroSection'
import Resume from '@/components/sections/Resume'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import React from 'react'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {/* Hero Section */}
            <HeroSection/>

            {/* Services Section */}
            <Services/>

            {/* Resume Section */}
            <Resume/>

            {/* Projects Section */}
            <Projects/>

            {/* Contact Section */}
            <Contact/>
        </div>
    )
}

export default Home
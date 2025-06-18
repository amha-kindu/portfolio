import React from 'react'
import Resume from '@/components/sections/Resume'
import Contact from '@/components/sections/Contact'
import Partners from '@/components/sections/Partners'
import Projects from '@/components/sections/Projects'
import HeroSection from '@/components/sections/HeroSection'


const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            {/* Hero Section */}
            <HeroSection/>

            {/* Partners Section */}
            <Partners/>

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
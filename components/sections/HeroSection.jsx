import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

const HeroSection = () => {
    return (
        <section id="hero-section" className="h-full w-full mt-24 mb-8">
            <div className="container mx-auto">
                <div className="flex flex-col gap-2 xl:gap-32 xl:flex-row  items-center sm:justify-start justify-between xl:pt-8 xl:pb-24">
                    {/* text */}
                    <div className="text-center xl:text-left order-2 xl:order-none flex flex-col gap-2">
                        <span className="text-xl">Senior Web Developer</span>
                        <h1 className="h1">Hello, I'm <br /><span className="text-accent">Amha Kindu</span></h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I specialize in building dynamic web applications, leveraging a wide range of tech stacks and advanced machine learning tools, including large language models (LLMs), to create interactive and user-friendly apps.
                        </p>
                        {/* button and socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                                <a
                                    href="/assets/resume.pdf"
                                    download="resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    Download CV <FiDownload className="text-xl" />
                                </a>
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Socials
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full 
                    flex justify-center items-center text-accent text-base 
                    hover:bg-accent hover:text-primary hover:transition-all 
                    duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    )
}

export default HeroSection
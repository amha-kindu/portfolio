"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
    Tooltip, TooltipContent, TooltipProvider, TooltipTrigger
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import ProjectSliderBtns from '@/components/ProjectSliderBtns';
import TechStack from '@/components/TechStack';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { FullscreenIcon } from "lucide-react";


const projects = [
    {
        num: "01",
        title: "Attalos",
        subtitle: "Real-Time Profitability Monitoring Platform",
        description: "Attalos is a SaaS solution designed to help businesses track and optimize their profitability across various marketplaces. By providing real-time insights at the order-line level, it accounts for all relevant costs—including buy prices, pick & pack, advertising, and integrator fees.",
        stack: [
            "Python", "Django", "HTML5", "CSS3", "Jquery", "JavaScript" , "PostgresSQL", "Redis", "Docker"
        ].map((item, index) => (<TechStack key={index} size={40} name={item} />)),
        images: [
            "/assets/work/Attalos/homepage.png",
            "/assets/work/Attalos/dashboard.png",
            "/assets/work/Attalos/order-lines.png",
            "/assets/work/Attalos/edit-view.png",
            "/assets/work/Attalos/settings.png",
        ],
        live: "https://attalos.io",
        github: ""
    },
    {
        num: "02",
        title: "Socialaize",
        subtitle: "Social Media Management Platform",
        description: "Socialaize is a platform that helps users to manage and schedule their posts on various social media platforms, including Twitter, LinkedIn, and other. Additionally, it offers features such as commenting, replying to comments, and post recommendations for different social media platforms.",
        stack: [
            "React", "Tailwind CSS", "Python", "Django", "PostgresSQL", "AWS", "Docker", "OpenAI API", "Twitter API", "Redis"
        ].map((item, index) => (<TechStack key={index} size={40} name={item} />)),
        images: [
            "/assets/work/Socialaize/Homepage.png",
            "/assets/work/Socialaize/Why.png",
            "/assets/work/Socialaize/SigninSignup.png",
            "/assets/work/Socialaize/Profile.png",
            "/assets/work/Socialaize/Dashboard.png",
            "/assets/work/Socialaize/ApprovedPosts.png",
            "/assets/work/Socialaize/SchedulePost.png",
        ],
        live: "",
        github: ""
    },
    {
        num: "03",
        title: "InboXpert",
        subtitle: "AI-Powered Email Client",
        description: "InboXpert is a cutting-edge, AI-enhanced email client built to streamline communication and optimize inbox management. It integrates OpenAI’s API to offer AI-driven functionalities such as predictive sorting, smart categorization, and automated responses.",
        stack: [
            "React", "Tailwind CSS", "Next.js", "OpenAI API", "PostgresSQL", "Stripe", "Clerk", "Prisma", "Pinecone"
        ].map((item, index) => (<TechStack key={index} size={40} name={item} />)),
        images: [
            "/assets/work/InboXpert/homepage.png",
            "/assets/work/InboXpert/signin.png",
            "/assets/work/InboXpert/dashboard.webp",
            "/assets/work/InboXpert/compose-email.png",
            "/assets/work/InboXpert/ai-compose.png",
            "/assets/work/InboXpert/subscription.png",
        ],
        live: "",
        github: "https://github.com/amha-kindu/InboXpert"
    },
    {
        num: "04",
        title: "Terguami",
        subtitle: "English-to-Amharic Machine Translation API",
        description: "Terguami is a FastAPI application powered by a custom transformer model built with PyTorch. It provides fast and accurate English-to-Amharic translations, with features like Docker support and interactive OpenAPI documentation, making it a scalable and easy-to-deploy solution for machine translation.",
        stack: [
            "Python", "PyTorch", "GoogleColab", "NLTK", "FastAPI", "Docker", "Swagger"
        ].map((item, index) => (<TechStack key={index} size={40} name={item} />)),
        images: [
            "/assets/work/Terguami/Example-1.png",
            "/assets/work/Terguami/Example-2.png",
            "/assets/work/Terguami/Example-3.png",
            "/assets/work/Terguami/Example-4.png",
        ],
        live: "",
        github: "https://github.com/amha-kindu/terguami"
    },
    {
        num: "05",
        title: "Rideshare",
        subtitle: "",
        description: "Rideshare is a mobile-based platform enabling users to book, share, and manage rides collaboratively. Key features include a dynamic ride-booking system, real-time ride notifications, and comprehensive user profile management, all backed by secure, scalable backend architecture. The platform integrates advanced scheduling algorithms to match riders efficiently, optimizes route sharing.",
        stack: [
            "CSharp", "NET", "NET CORE", "SignalR", "Mapbox", "PostgresSQL", "Docker", "Swagger"
        ].map((item, index) => (<TechStack key={index} size={40} name={item} />)),
        images: [
            "/assets/work/Rideshare/Homepage.png",
            "/assets/work/Rideshare/About.png",
            "/assets/work/Rideshare/HowItWorks.png",
            "/assets/work/Rideshare/API.png",
            "/assets/work/Rideshare/API-2.png",
            "/assets/work/Rideshare/API-3.png",
            "/assets/work/Rideshare/API-4.png",
            "/assets/work/Rideshare/API-5.png",
        ],
        live: "https://rideshare-swdm.onrender.com/swagger/index.html",
        github: "https://github.com/amhakindu/Rideshare"
    },
    {
        num: "06",
        title: "NFT-Gebeya",
        subtitle: "Marketplace for Digital Products as NFTs",
        description: "NFT-Gebeya is  a robust online platform that facilitates the trading and showcasing of digital products as NFTs. The platform will support a wide range of digital assets, including artwork, photography, ebooks, collectibles, audio and video.",
        stack: [
            "CSharp", "NET", "NET CORE", "SignalR", "PostgresSQL", "AWS", "Docker", "Swagger", "OpenAI API", "Ethereum", "Solidity"
        ].map((item, index) => (<TechStack key={index} size={40} name={item} />)),
        images: [
            "/assets/work/NFT-Gebeya/Homepage.png",
            "/assets/work/NFT-Gebeya/HowItWorks.png",
            "/assets/work/NFT-Gebeya/TopCreators.png",
            "/assets/work/NFT-Gebeya/UserProfile.png",
            "/assets/work/NFT-Gebeya/Auction.png",
            "/assets/work/NFT-Gebeya/MintNFT.png",
        ],
        live: "https://nft-marketplace-rose-zeta.vercel.app/",
        github: "https://github.com/KaleabKindu/NFT_Marketplace"
    }
]


const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <motion.div
            id="projects"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className="min-h-[80vh] w-full flex flex-col justify-center py-12 xl:px-0"
        >
            <h1 className="h1 w-full text-center mb-8 text-accent">Projects</h1>
            <div className="container mx-auto flex flex-col gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col xl:flex-row xl:gap-[30px] py-4 xl:py-10 border-b-2 border-white/10">
                        <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
                            <div className="flex flex-col gap-[30px]">
                                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                    {project.num}
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col justify-center items-start gap-2">
                                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
                                        <p className="text-xl text-white/60">{project.subtitle}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link href={project.live} target="_blank">
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                                                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Live demo</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Link>
                                        <Link href={project.github} target="_blank">
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-[40px] h-[40px] rounded-full bg-white/5 flex justify-center items-center group">
                                                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>Github Repository</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </Link>
                                    </div>
                                </div>
                                <p className="text-white/60">{project.description}</p>
                                <ul className="flex flex-wrap gap-4 overflow-y-auto">
                                    {project.stack.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="text-xl text-accent"
                                            >
                                                {item}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="w-full xl:w-[50%]">
                            {selectedProject === index ?
                                // Project Fullscreen Images Dialog
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                                    <motion.div
                                        className="relative w-full h-[90vh] max-w-[90vw]"
                                        initial={{ scale: 0.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                                    >

                                        <Carousel className="w-full h-full">
                                            <CarouselContent>
                                                {projects[index].images.map((image, idx) => (
                                                    <CarouselItem key={idx} className="relative w-full h-[95vh]">
                                                        <Image
                                                            src={image}
                                                            alt={`Project image ${idx + 1}`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </Carousel>
                                    </motion.div>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-5 right-5 text-accent hover:text-red-600 text-5xl font-bold z-10 hover:rotate-90 transition duration-300"
                                        aria-label="Close"
                                    >
                                        &times;
                                    </button>
                                </div>
                                :
                                // Project Small Images
                                <Swiper
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    style={{
                                        '--swiper-pagination-color': '#00ff99',
                                        '--swiper-pagination-bullet-inactive-color': '#ffffff',
                                    }}
                                    modules={[Pagination]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    className="xl:h-[520px] mb-12"
                                >
                                    {project.images.map((image, idx) => {
                                        return (
                                            <SwiperSlide key={idx} className="w-full">
                                                <div className="h-[460px] relative group flex justify-center items-center bg-accent">
                                                    <div className="relative w-full h-full">
                                                        <Image
                                                            src={image} fill className="object-cover hover:scale-95 hover:cursor-pointer transition-all"
                                                            alt={`${project.title} Image #${idx}`}
                                                            onClick={() => setSelectedProject(index)}
                                                        />
                                                    </div>
                                                    {/* <FullscreenIcon className="absolute left-2 bottom-2 w-8 h-8 text-accent hover:scale-125 hover:text-accent/50 hover:cursor-pointer transition-all" onClick={() => setSelectedProject(index)} /> */}
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })
                                    }
                                    <ProjectSliderBtns
                                        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                    />
                                </Swiper>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default Projects
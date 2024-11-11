"use client";

import { useState } from "react";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import { BsArrowUpRight, BsFullscreen, BsGithub } from "react-icons/bs";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from '@/components/WorkSliderBtns';
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
    title: "Socialaize",
    description: "Socialaize is a social media management system that helps users to manage and schedule their posts on various social media platforms, including Twitter, LinkedIn, and other. Additionally, it offers features such as commenting, replying to comments, and post recommendations for different social media platforms.",
    stack: [
      "React", "Tailwind CSS", "Django", "PostgresSQL", "AWS", "Docker", "OpenAI API", "Twitter API", "Redis"
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
    num: "02",
    title: "InboXpert",
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
    github: ""
  },
  {
    num: "03",
    title: "FastLlama",
    description: "FastLlama is a scalable local knowledge base augmented with an LLM to provide scalable question-answering capabilities for alot of users. The system supports two operational modes: Question Answering and Chatbot.",
    stack: [
      "FastAPI", "OpenAI API", "MongoDB", "LlamaIndex", "Swagger"
    ].map((item, index) => (<TechStack key={index} size={40} name={item} />)),
    images: [
      "/assets/work/thumb1.png",
      "/assets/work/thumb2.png",
      "/assets/work/thumb3.png",
    ],
    live: "",
    github: ""
  }
]


const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      {selectedProject === null ?
        // Projects list
        <div className="container mx-auto flex flex-col gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col xl:flex-row xl:gap-[30px] border-b-2 border-white/10">
              <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div className="flex flex-col gap-[30px]">
                  <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                    {project.num}
                  </div>
                  <div className="flex justify-between">
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
                    <div className="flex items-center gap-4">
                      <Link href={project.live}>
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
                      <Link href={project.github}>
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
                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                          <div className="relative w-full h-full">
                            <Image
                              src={image} fill className="object-cover"
                              alt=""
                            />
                          </div>
                          <FullscreenIcon className="absolute left-2 bottom-2 w-8 h-8 text-black hover:scale-125 hover:text-accent hover:cursor-pointer transition-all" onClick={() => setSelectedProject(index)} />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  <WorkSliderBtns
                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                    btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  />
                </Swiper>
              </div>
            </div>
          ))
          }
        </div>

        :

        // Project Images Dialog
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <motion.div
            className="relative w-full h-[90vh] max-w-[90vw]"
            initial={{ scale: 0.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >

            <Carousel className="w-full h-full">
              <CarouselContent>
                {projects[selectedProject].images.map((image, idx) => (
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
            className="absolute top-6 right-10 text-accent hover:text-red-600 text-5xl font-bold z-10 hover:rotate-90 transition duration-300"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

      }

    </motion.div>
  );
}

export default Work
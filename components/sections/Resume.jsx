"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from 'next/image';
import TechStack from "@/components/TechStack";

const about = {
    title: "About me",
    description: "I'm a web developer with a strong background in Python, full-stack development, and machine learning, with a strong focus on large language models (LLMs) and AI-powered solutions. With over five years of hands-on experience, I’m passionate about building high-performance, scalable web applications and using AI/ML technologies to solve real-world problems.",
    info: [
        { name: "Name", value: "Amha Kindu" },
        { name: "Phone", value: "(+251)978259900" },
        { name: "Experience", value: "5+ Years" },
        { name: "Languages", value: "English, Amharic" },
        { name: "Freelance", value: "Available" },
        { name: "Email", value: "amhakindu@gmail.com" },
        { name: "Nationality", value: "Ethiopian" },
    ]
}

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    description: "With a blend of freelance projects on Upwork and industry roles both in-person & remote, I've built skills in web development and machine learning, delivering effective software solutions and gaining hands-on experience with advanced technologies.",
    items: [
        { company: "Freelance(Upwork)", position: "Freelance Web Developer", duration: "Jan 2020 - Present" },
        { company: "John Galt Solutions", position: "Junior AI/ML Software Engineer", duration: "April 2024 - Oct 2024" },
        { company: "Attalos Agency", position: "Django Developer", duration: "Nov 2022 - Oct 2023" },
        { company: "Nexushub(Startup)", position: "Python Developer", duration: "Jun 2020 - Sep 2022" },
        { company: "Eskalate Africa Software Development S.C", position: "Web Development Intern", duration: "April 2019 - Jun 2019" },
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    description: "I have a strong academic foundation in software engineering and have also pursued additional training in competitive programming and full-stack web development. My studies at the Addis Ababa Institute of Technology equipped me with the skills to build innovative software solutions, while my experience with Africa To Silicon Valley further honed my development and problem-solving abilities.",
    items: [
        { institution: "Addis Ababa Institute of Technology", degree: "B.S in Software Engineering", duration: "2019 - 2024" },
        { institution: "Africa To Silicon Valley", degree: "Competitive Programming", duration: "2021 - 2022" },
        { institution: "Africa To Silicon Valley", degree: "Full Stack Web Development Bootcamp", duration: "2021" }
    ]
}

const techStacks = [
    { name: "HTML5", src: "/assets/skills/icons/HTML5.svg" },
    { name: "CSS3", src: "/assets/skills/icons/CSS3.svg" },
    { name: "JavaScript", src: "/assets/skills/icons/JavaScript.svg" },
    { name: "TypeScript", src: "/assets/skills/icons/TypeScript.svg" },
    { name: "Jquery", src: "/assets/skills/icons/Jquery.svg" },
    { name: "React", src: "/assets/skills/icons/React.svg" },
    { name: "Tailwind CSS", src: "/assets/skills/icons/Tailwind CSS.svg" },
    { name: "Next.js", src: "/assets/skills/icons/Next.js.svg" },
    { name: "Node.js", src: "/assets/skills/icons/Node.js.svg" },
    { name: "Python", src: "/assets/skills/icons/Python.svg" },
    { name: "Django", src: "/assets/skills/icons/Django.svg" },
    { name: "Django REST", src: "/assets/skills/icons/Django REST.svg" },
    { name: "FastAPI", src: "/assets/skills/icons/FastAPI.svg" },
    { name: "Flask", src: "/assets/skills/icons/Flask.svg" },
    { name: "MySQL", src: "/assets/skills/icons/MySQL.svg" },
    { name: "MongoDB", src: "/assets/skills/icons/MongoDB.svg" },
    { name: "PostgresSQL", src: "/assets/skills/icons/PostgresSQL.svg" },
    { name: "Redis", src: "/assets/skills/icons/Redis.svg" },
    { name: "RabbitMQ", src: "/assets/skills/icons/RabbitMQ.svg" },
    { name: "Apache Kafka", src: "/assets/skills/icons/Apache Kafka.svg" },
    { name: "Nest.js", src: "/assets/skills/icons/Nest.js.svg" },
    { name: "TensorFlow", src: "/assets/skills/icons/TensorFlow.svg" },
    { name: "PyTorch", src: "/assets/skills/icons/PyTorch.svg" },
    { name: "NGINX", src: "/assets/skills/icons/NGINX.svg" },
    { name: "Docker", src: "/assets/skills/icons/Docker.svg" },
    { name: "AWS", src: "/assets/skills/icons/AWS.svg" },
    { name: "Git", src: "/assets/skills/icons/Git.svg" },
    { name: "Swagger", src: "/assets/skills/icons/Swagger.svg" },
    { name: "OpenAI API", src: "/assets/skills/icons/OpenAI API.svg" },
    { name: "Stripe", src: "/assets/skills/icons/Stripe.svg" },
    { name: "Clerk", src: "/assets/skills/icons/Clerk.svg" },
]

const skills = {
    title: "My Skills",
    description: "I'm skilled in building AI-powered full-stack web apps. I build interactive, high-performance apps with optimized performance using caching and message brokers to deploy scalable apps with robust back-end architecture. I also have experience in working with various ML tools including large language models (using APIs or local) and I’m passionate about building, training, and deploying models to create AI-powered solutions for real-world challenges.",
    skillList: techStacks.map((stack, index) => {
        return {
            name: stack.name,
            icon: (
                <Image
                    width={100}
                    height={100}
                    src={stack.src}
                    alt={stack.name}
                    className="h-fit m-2"
                />
            )
        };
    })
}



const Resume = () => {
    return (
        <motion.div
            id="resume"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0"
        >
            <h1 className="h1 w-full text-center mb-8 text-accent">Resume</h1>

            <div className='container mx-auto'>
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px] xl:py-8"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3
                                                        className="leading-tight text-xl max-w-[260px] min-h-[60px] text center lg:text-left"
                                                    >
                                                        {item.position}
                                                    </h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 leading-tight">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="w-full max-w-[900px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3
                                                        className="leading-tight text-xl min-h-[60px] text center lg:text-left"
                                                    >
                                                        {item.degree}
                                                    </h3>
                                                    <div className="flex items-center gap-4">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 leading-tight">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="flex flex-wrap gap-8">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TechStack size={50} name={skill.name} />
                                            </li>);
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className=" text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.name}</span>
                                                <span className="text-xl">{item.value}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume

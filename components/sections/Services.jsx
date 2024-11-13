"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
    {
        num: '01',
        title: "Full-Stack Web Development",
        description: "I specialize in developing end-to-end, high-performance web applications using modern techstacks. I focus on creating scalable, maintainable code that enhances user experience and meets business goals.",
        href: ""
    },
    {
        num: '02',
        title: "AI-Powered Applications",
        description: "I build AI-driven web applications using machine learning and LLMs to boost user engagement, automate workflows, and deliver data-driven insights through features like recommendation engines and chatbots.",
        href: ""
    },
    {
        num: '03',
        title: "Machine Learning Solutions",
        description: "I build, train, and deploy ML models to solve specific problems like predictive analytics, anomaly detection, and natural language processing. From data preprocessing & training to model deployment, I guide the entire lifecycle of ML projects.",
        href: ""
    },
    {
        num: '04',
        title: "DevOps & Cloud Infrastructure",
        description: "I specialize in streamlining development workflows and deploying scalable, reliable infrastructures. Leveraging tools like Docker and cloud services like AWS, I build and manage CI/CD pipelines and automate deployment processes to ensure seamless, resilient delivery.",
        href: ""
    }
]



const Services = () => {
    return (
        <section id="services" className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
            <div className="container mx-auto">
                <h1 className="h1 w-full text-center mb-12 text-accent">Services</h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4, duration: 0.4, ease: "easeIn"
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div
                                        className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500"
                                    >
                                        {service.num}
                                    </div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>

                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                                    {service.title}
                                </h2>

                                {/* description */}
                                <p className="text-white/60">{service.description}</p>

                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })
                    }

                </motion.div>
            </div>
        </section>
    )
}

export default Services
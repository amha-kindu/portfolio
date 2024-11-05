"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            {/* image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2, duration: 0.4, ease: "easeInOut"
                    },
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4 , duration: 0.4, ease: "easeInOut"
                        },
                    }}
                    className="w-[298px] h-[298px] xl:w-[450px] xl:h-[450px] mix-blend-lighten absolute"
                >
                    <Image
                        src="/assets/profile-pic.png"
                        priority
                        quality={100}
                        fill
                        alt="hero"
                        className="object-contain pl-8"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"/>
                </motion.div>
            </motion.div>

            {/* decoration */}
            <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle 
                    cx="253"
                    cy="253"
                    r="250"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: [
                            "15 120 25 25", 
                            "16 25 92 72",
                            "4 250 22 22"
                        ],
                        rotate: [120, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
            </motion.svg>
        </div>
    )
}

export default Photo
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectGroup,
  SelectItem, SelectLabel,
  SelectTrigger, SelectValue
} from "@/components/ui/select";
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt
} from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "(+251)978259900"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "amhakindu@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    value: "Addis Ababa, Ethiopia"
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[64%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" action="">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi numquam nemo quam deserunt dolor accusantium eligendi explicabo a, sit laborum voluptates. Dolorum, rerum! Sapiente nostrum perspiciatis blanditiis impedit iste!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="First Name"
                />
                <Input
                  type="lastname"
                  placeholder="Last Name"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                />
              </div>
              <Select
                onValueChange={(value) => console.log(value)}
                defaultValue="Select a service"
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Type your message here."
                className="h-[200px]"
              />
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((info, index) => {
                return (
                  <li
                    key={index}
                    className="flex items-center gap-6"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">
                        {info.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{info.title}</p>
                      <h3 className="text-xl">{info.value}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub/>, path: "https://www.github.com/amha-kindu"},
    { icon: <FaLinkedinIn/>, path: ""},
    { icon: <FaYoutube/>, path: ""},
    { icon: <FaTwitter/>, path: ""}
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => (
            <Link href={social.path} key={index} className={iconStyles}>
                {social.icon}
            </Link>
        ))}
        
    </div>
  )
}

export default Socials
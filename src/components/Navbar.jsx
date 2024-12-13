import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa"



const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <h1 class="logo">RS</h1>
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/rahulsharma1919" className="hover:text-neutral-100 transition-transform transform hover:scale-125"><FaLinkedin /></a> 
            <a href="https://github.com/rahulsharma1919" className="hover:text-neutral-100 transition-transform transform hover:scale-125"><FaGithub /></a>
            <a href="https://leetcode.com/u/rahul1sharma1919/" className="hover:text-neutral-100 transition-transform transform hover:scale-125"><SiLeetcode /></a>
            <a href="https://www.instagram.com/_rahul_sharma.9554/" className="hover:text-neutral-100 transition-transform transform hover:scale-125"><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar
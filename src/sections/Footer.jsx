"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si"; // LeetCode icon from Simple Icons

const Footer = () => {
  return (
    <footer className="relative w-full bg-blue text-neutral-200 py-6">
      {/* Divider */}
      <div className="h-[1px] w-full bg-white/20 mb-6" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4"
      >
        {/* Terms / Privacy Links */}
        <div className="flex items-center gap-3 text-sm">
          <a
            href="mailto:rahul1sharma1919@gmail.com"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            rahul1sharma1919@gmail.com
          </a>
          <span className="text-neutral-400">|</span>
          <a
            href="tel:+919554888377"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            +91-9554888377
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {/* GitHub */}
          <motion.a
            href="https://github.com/rahulsharma1919"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-black transition-all duration-500 shadow-md hover:shadow-black/40"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/rahulsharma1919"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#0077B5] transition-all duration-500 shadow-md hover:shadow-[#0077B5]/40"
          >
            <FaLinkedin className="w-5 h-5" />
          </motion.a>

          {/* X (Twitter) */}
          <motion.a
            href="https://x.com/RahulSh01554528"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-black transition-all duration-500 shadow-md hover:shadow-black/40"
          >
            <FaXTwitter className="w-5 h-5" />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/_rahul_sharma.9554/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-yellow-500 transition-all duration-500 shadow-md hover:shadow-pink-400/40"
          >
            <FaInstagram className="w-5 h-5" />
          </motion.a>

          {/* LeetCode */}
          <motion.a
            href="https://leetcode.com/u/rahul1sharma1919/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFA116] transition-all duration-500 shadow-md hover:shadow-[#FFA116]/40"
          >
            <SiLeetcode className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-neutral-300 text-center md:text-right">
          © 2025 <span className="font-semibold text-white">Rahul</span>. All
          rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;

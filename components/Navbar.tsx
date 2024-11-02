'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { socials } from '@/constants';

const Navbar: FC = () => {
    return (
        <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[60] px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <a
                    href="#about"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className=" font-bold ml-[10px] hidden md:block text-gray-300"
                    >
                        Anton Shvets
                    </motion.span>
                </a>
                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] md:text-xl text-xs bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="#home"
                            className="cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
                        >
                            Home
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="#about"
                            className="cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-600"
                        >
                            About me
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="#experience"
                            className="cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-600"
                        >
                            Experience
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
                        >
                            Contact
                        </motion.a>
                    </div>
                </div>

                <div className="flex flex-row gap-5 max-md:hidden">
                    {socials.map((social, index) => (
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            key={`navbar-${index}`}
                            href={social.link}
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24}
                            />
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

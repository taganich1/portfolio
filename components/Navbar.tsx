import React, { FC } from 'react';
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
                    <span className="font-bold ml-[10px] hidden md:block text-gray-300">
                        Anton Shvets
                    </span>
                </a>
                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <a href="#home" className="cursor-pointer">
                            Home
                        </a>
                        <a href="#about" className="cursor-pointer">
                            About me
                        </a>
                        <a href="#experience" className="cursor-pointer">
                            Experience
                        </a>
                        <a href="#contact" className="cursor-pointer">
                            Contact
                        </a>
                    </div>
                </div>

                <div className="flex flex-row gap-5">
                    {socials.map((social) => (
                        <a href={social.link}>
                            <Image
                                src={social.src}
                                alt={social.name}
                                key={social.name}
                                width={24}
                                height={24}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import React, { FC } from 'react';
import { socials } from '@/constants';
import Image from 'next/image';

const Footer: FC = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] pt-20 mt-8">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="flex flex-row gap-5 pb-5 md:hidden">
                    {socials.map((social, index) => (
                        <a key={`navbar-${index}`} href={social.link}>
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
                <div className=" text-[15px] text-center">
                    &copy; 2024 Anton Shvets. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;

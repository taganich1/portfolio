'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from '@/utils/motion';
import Rocket from '@/components/Rocket';
const HeroContent: FC = () => {
    const [launchRocket, setLaunchRocket] = useState<boolean>(false);

    const handleLaunchComplete = () => {
        // Reset rocket when the rocket animation is complete
        setLaunchRocket(false);
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-10 md:px-20 mt-36 w-full z-[20]"
        >
            {launchRocket && (
                <Rocket
                    isVisible={launchRocket}
                    onLaunchComplete={handleLaunchComplete}
                />
            )}
            <div className="w-full h-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[15px] px-4 border border-[#7042f88b] opacity-[0.9] "
                >
                    <span className="text-[#b49bff] mr-[10px]"> 🇺🇦</span>

                    <h1 className="Welcome-text text-[13px]">
                        Привіт! (Hello in Ukrainian)
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-3xl md:text-6xl  text-bold text-white max-w-[600px] w-auto h-auto"
                >
                    Hello there!
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
                        And welcome to my porfolio website!
                    </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="md:text-lg text-sm text-gray-400 my-5 max-w-[600px]"
                >
                    My two-year journey in web development is marked by exciting
                    challenges and rewarding experiences. Dedicated to crafting
                    seamless and visually appealing online experiences, explore
                    my portfolio to witness my skills in action.
                </motion.p>
                <motion.div
                    variants={slideInFromLeft(1)}
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                    onClick={() => setLaunchRocket(true)}
                >
                    Click here to launch the rocket! 🚀
                </motion.div>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex flex-center items-center"
            >
                <Image
                    src="/assets/mainIcons.svg"
                    alt="work icons"
                    width={650}
                    height={650}
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;

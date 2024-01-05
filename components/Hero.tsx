'use client';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

import HeroContent from '@/components/HeroContent';
import SectionWrapper from '@/hoc/SectionWrapper';

const Hero: FC = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <video
                autoPlay
                muted
                playsInline
                loop
                className="rotate-180 absolute top-[-355px] left-0 z-[1] w-full h-full object-cover min-[2123px]:object-fill max-md:hidden"
            >
                <source src="/assets/blackhole.webm" type="video/webm" />
            </video>
            <HeroContent />
            <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center max-[637px]:hidden">
                <motion.a href="#about" className="z-40">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-3 h-3 rounded-full bg-white mb-1"
                        />
                    </div>
                </motion.a>
            </div>
        </div>
    );
};

export default SectionWrapper(Hero, 'home');

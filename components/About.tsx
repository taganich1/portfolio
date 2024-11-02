'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { services } from '@/constants';
import { fadeIn, textVariant } from '@/utils/motion';
import SectionWrapper from '@/hoc/SectionWrapper';

// const staggerContainer = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.3, // Adjust the delay between each item's animation
//             delayChildren: 0.2,
//         },
//     },
// };

interface IServiceCard {
    index: number;
    title: string;
    icon: string;
}

const ServiceCard: FC<IServiceCard> = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full z-20">
            <motion.div
                variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <Image
                        src={icon}
                        alt="web-development"
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const canvas = document.getElementById('constellation-sketcher');
    //         if (canvas) {
    //             ConstellationSketcher.setAnimated(true)
    //                 .setTwinkle(true)
    //                 .setConstellation('Scorpius') // Set to Scorpius constellation
    //                 .sketch(); // Start the sketching
    //         }
    //     }
    //
    //     return () => {
    //         ConstellationSketcher.stop(); // Stop the sketching when the component unmounts
    //     };
    // }, []);

    return (
        <div className="mt-5 mb-20 z-20 px-10 md:px-20">
            <motion.div className="z-20" variants={textVariant(0.8)}>
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                    Introduction
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Overview.
                </h2>
            </motion.div>
            {/*SCORPIO */}
            {/*<div*/}
            {/*    className="flex justify-center items-center"*/}
            {/*    style={{ height: '500px' }}*/}
            {/*>*/}
            {/*    <canvas*/}
            {/*        id="constellation-sketcher"*/}
            {/*        width="500"*/}
            {/*        height="500"*/}
            {/*        className="animated-star-border"*/}
            {/*        style={{ width: '500px', height: '500px' }}*/}
            {/*    ></canvas>*/}
            {/*</div>*/}
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I&apos;m a skilled software developer with experience in
                TypeScript and JavaScript, and expertise in frameworks like
                React, React Native and Next.js. I&apos;m a quick learner and
                collaborate closely with clients to create efficient, scalable,
                and user-friendly solutions that solve real-world problems.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10 justify-center">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(About, 'about');

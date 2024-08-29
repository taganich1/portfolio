'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from '@/utils/motion';

const images = [
    {
        src: 'https://i.pinimg.com/originals/6f/dc/ed/6fdcedb34ec8cf3a5c2113a11e3080e1.gif',
        alt: 'Image 3',
        text: "I love you so much that I can't help but hold on tight. It's really painfully for me when you feel sad.",
    },
    {
        src: 'https://i.pinimg.com/originals/b7/10/f2/b710f21fee78da75eecb22b407658ead.gif',
        alt: 'Image 7',
        text: "Sometimes I may come across as overwhelming, but it's only because I care so deeply about you. I know that I can be annoying, but I just want be closer and help you.",
    },
    {
        src: 'https://i.pinimg.com/originals/a1/10/60/a11060176e434e78f2c414d514dc28a2.gif',
        alt: 'Image 4',
        text: "Even when I'm not by your side, know that my heart is always with you. I miss you dearly and can't wait until we're together again.",
    },
    {
        src: 'https://i.pinimg.com/originals/cf/cc/7c/cfcc7cc8e55482c77ff28e29facde023.gif',
        alt: 'Image 1',
        text: "Life can be tough sometimes, but as long as we have each other, we can get through anything. I'm here for you, just let me know anytime.",
    },
    {
        src: 'https://i.pinimg.com/originals/4f/02/ed/4f02ed6d0e0bbae6e4b0f662d80f4267.gif',
        alt: 'Image 6',
        text: 'I wanna be with you right here right now. I miss so much. I wish I could be with you every second of the day, just like this. ',
    },
];

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Adjust the delay between each item's animation
            delayChildren: 0.2,
        },
    },
};

const ReinaDynamic = () => {
    return (
        <div className="mt-5 pt-20 mb-20 z-20 px-10 md:px-20">
            <motion.div
                variants={slideInFromTop}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
                initial="hidden"
                whileInView="visible"
            >
                <motion.div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl">
                    FOR REINA <span>&#128153;</span>
                </motion.div>
                <img
                    width={300}
                    height={300}
                    src="https://i.pinimg.com/originals/2e/08/34/2e08344341b6b927fdd0338537b0c2e9.gif"
                    alt=""
                />
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
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }} // Controls when the animation triggers
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        variants={
                            index % 2 === 0
                                ? slideInFromLeft(0.7)
                                : slideInFromRight(0.7)
                        }
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        style={{
                            display: 'flex',
                            flexDirection:
                                index % 2 === 0 ? 'row' : 'row-reverse',
                            alignItems: 'center',
                            margin: '20px 0',
                            borderRadius: '40px',
                        }}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            style={{
                                width: '300px',
                                height: '300px',
                                marginRight: index % 2 === 0 ? '20px' : '0',
                                marginLeft: index % 2 !== 0 ? '20px' : '0',
                                borderRadius: '40px',
                            }}
                        />
                        <motion.p className="md:text-lg text-sm text-gray-400 my-5 max-w-[600px]">
                            {image.text}
                        </motion.p>
                    </motion.div>
                ))}
                <motion.div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        borderRadius: '40px',
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1 },
                        },
                    }}
                >
                    <img
                        style={{
                            borderRadius: '40px',
                            width: '400px',
                            height: '400px',
                        }}
                        src="https://i.pinimg.com/originals/1c/6a/25/1c6a256a7ad82947b631eb31076435bb.gif"
                        alt="test"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ReinaDynamic;

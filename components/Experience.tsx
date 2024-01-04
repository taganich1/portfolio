'use client';
import React, { FC } from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '@/styles';
import { experiences } from '@/constants';
import { textVariant } from '@/utils/motion';
import SectionWrapper from '@/hoc/SectionWrapper';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
    title: string;
    company_name: string;
    icon: any;
    iconBg: string;
    date: string;
    link: string;
    points: string[];
}

const ExperienceCard: FC<{ experience: ExperienceItem }> = ({ experience }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    return (
        <VerticalTimelineElement
            className="z-50"
            visible={inView}
            contentStyle={{
                background: '#1d1836',
                color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #232631' }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <Link
                    className="flex justify-center items-center w-full h-full"
                    href={experience.link}
                >
                    <Image
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[90%] h-[90%] object-contain"
                    />
                </Link>
            }
        >
            <div ref={ref}>
                <h3 className="text-white text-[24px] font-bold">
                    {experience.title}
                </h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <div>
            <motion.div variants={textVariant()} className="z-[600]">
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default SectionWrapper(Experience, 'experience');

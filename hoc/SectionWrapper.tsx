import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

import { styles } from '@/styles';
import { staggerContainer } from '@/utils/motion';

type SectionWrapperType = (Component: FC, idName: string) => FC;

const SectionWrapper: SectionWrapperType = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0 pb-40`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;

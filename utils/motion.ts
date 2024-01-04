import { Variants, Orchestration } from 'framer-motion';

export const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
        },
    },
};

export function slideInFromLeft(delay: number) {
    return {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export function slideInFromRight(delay: number) {
    return {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export const textVariant = (delay: number = 0.6) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

export const fadeIn = (
    direction: string,
    type: string,
    delay: number,
    duration: number
) => {
    return {
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    };
};

export const slideIn = (
    direction: string,
    type: string,
    delay: number,
    duration: number
) => {
    return {
        hidden: {
            x:
                direction === 'left'
                    ? '-100%'
                    : direction === 'right'
                      ? '100%'
                      : 0,
            y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    };
};

export const staggerContainer = (
    staggerChildren: number = 0.5,
    delayChildren: number = 0.5
): Variants => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};

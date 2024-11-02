import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    smiss,
    ovgu,
    uninow,
    go,
    graphql,
    next,
    webdev,
} from '../public/assets';

const services = [
    {
        title: 'Web Developer',
        icon: webdev,
    },
    {
        title: 'React Native Developer',
        icon: reactjs,
    },
    {
        title: 'Student at OvGU',
        icon: ovgu,
    },
    {
        title: 'Currently working in UniNow GmbH',
        icon: uninow,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'docker',
        icon: docker,
    },
    {
        name: 'go',
        icon: go,
    },
    {
        name: 'graphql',
        icon: graphql,
    },
    {
        name: 'Next JS',
        icon: next,
    },
];

const experiences = [
    {
        title: 'Front-End Developer',
        company_name: 'SMISS (Full-Time)',
        icon: smiss,
        iconBg: '#fff',
        date: 'Jan 2021 - Feb 2022',
        link: 'https://smissltd.com/',
        points: [
            'Built chat app using TypeScript, Firebase,Google APIs and Redux.',
            'Developed currency tracking app in React Native with TypeScript and REST API.',
            'Implementing responsive and pixel perfect design.',
        ],
    },
    {
        title: 'Front-End Developer',
        company_name: 'UniNow (Working Student)',
        icon: uninow,
        iconBg: '#fff',
        date: 'Oct 2022 - Present',
        link: 'https://uninow.com/',
        points: [
            'Developing and maintaining web applications using React.js and other related technologies.',
            'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
            'Created interactive front-end features, such as post functionality and user profiles, including change logs.',
            'Collaborated on cross-functional projects using React.js, Go Lang,React Native,Node.js and various technologies.',
            'Developed a UI components library using Storybook, Typescript, Tailwind and Headless UI.',
        ],
    },
];
const socials = [
    {
        name: 'Linkedin',
        src: '/assets/linkedin.svg',
        link: 'https://www.linkedin.com/in/anton-shvets-taganich1/',
    },
    {
        name: 'Github',
        src: '/assets/github.svg',
        link: 'https://github.com/taganich1',
    },
    {
        name: 'Telegram',
        src: '/assets/telegram.svg',
        link: 'https://t.me/to_toshick',
    },
];

export { services, technologies, experiences, socials };

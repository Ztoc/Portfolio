import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  creator,
  web,
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
  dgn,
  arcanys,
  magellan,
  firebase,
  graphql,
  java,
  knex,
  less,
  maven,
  nest,
  next,
  postgresql,
  prisma,
  spring,
  digitalWallet,
  adalab,
  gtx,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: mobile,
  },
  {
    title: 'Problem Solver',
    icon: backend,
  },
  {
    title: 'Continuous Learner',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Less',
    icon: less,
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
    name: 'Next JS',
    icon: next,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Nest JS',
    icon: nest,
  },
  {
    name: 'Knex',
    icon: knex,
  },
  {
    name: 'Prisma',
    icon: prisma,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Maven',
    icon: maven,
  },
  {
    name: 'Spring',
    icon: spring,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Postgresql',
    icon: postgresql,
  },
  {
    name: 'Firebase',
    icon: firebase,
  },
  {
    name: 'GraphQL',
    icon: graphql,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Full Stack Developer',
    companyName: 'Arcanys',
    icon: arcanys,
    iconBg: '#383E56',
    date: 'Apr 2022 - Dec 2023',
    points: [
      'Collaborated effectively with cross-functional teams to ensure seamless integration anddelivery of projects.',
      'Conducted thorough code reviews, identifying and resolving bugs to improve application functionality and user experience.',
      'Implemented best practices and coding standards to ensure high-quality code and maintainable applications.',
      'Actively participated in agile development processes, contributing to efficient project management and timely delivery.',
    ],
  },
  {
    title: 'Full Stack Developer',
    companyName: 'DGN Technologies',
    icon: dgn,
    iconBg: '#E6DEDD',
    date: 'May 2019 - Feb 2022',
    points: [
      'Contributed to designing and developing projects and workflows',
      'Provided technical support to ensure smooth operation and functionality of web applications.',
      'Built reusable components to enhance development efficiency and maintainability.',
      'Improved the performance of web applications through optimization techniques and code refactoring.',
      'Demonstrated strong problem-solving skills in troubleshooting and resolving technical issues.',
    ],
  },
  {
    title: 'Frontend Developer',
    companyName: 'Magellan Solutions Outsourcing',
    icon: magellan,
    iconBg: '#383E56',
    date: 'Oct 2016 - Apr 2019',
    points: [
      'Collaborated with a team to develop frontend components for various projects.',
      'Utilized HTML, CSS, JavaScript, React, Vue, Next, Redux, and CSS frameworks to create responsive and user-friendly interfaces.',
      'Demonstrated proficiency in frontend development, ensuring high-quality code and adherence to best practices.',
      'Actively participated in code reviews and provided constructive feedback to improve overall code quality.',
      'Stayed updated with the latest frontend technologies and trends to continuously enhance development skills.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Adalab',
    description: 'Web-based platform that allows users to learn programming',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'purple-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: adalab,
    sourceCodeLink: '#',
  },
  {
    name: 'Digital Wallet',
    description: 'Web application where users can manage their wallets',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'web3',
        color: 'pink-text-gradient',
      },
      {
        name: 'styled-components',
        color: 'purple-text-gradient',
      },
    ],
    image: digitalWallet,
    sourceCodeLink: '',
  },
  {
    name: 'GTX',
    description: 'Web application for trading, make transactions',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient',
      },
      {
        name: 'web3',
        color: 'pink-text-gradient',
      },
      {
        name: 'trading-view',
        color: 'purple-text-gradient',
      },
    ],
    image: gtx,
    sourceCodeLink: '',
  },
];

export { services, technologies, experiences, testimonials, projects };

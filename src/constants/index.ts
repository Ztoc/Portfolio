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
  pineSucceed,
  firebase,
  graphql,
  java,
  next,
  postgresql,
  adalab,
  gtx,
  shuttle,
  das,
  key,
  python,
  docker,
  aws,
  kubernetes,
  datadog,
  php,
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
    url: 'https://html.spec.whatwg.org/',
  },
  {
    name: 'CSS 3',
    icon: css,
    url: 'https://www.w3.org/Style/CSS/Overview.en.html',
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'JavaScript',
    icon: javascript,
    url: 'https://www.javascript.com/',
  },
  {
    name: 'TypeScript',
    icon: typescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React JS',
    icon: reactjs,
    url: 'https://reactjs.org/',
  },
  {
    name: 'Redux',
    icon: redux,
    url: 'https://redux.js.org/',
  },
  {
    name: 'Next JS',
    icon: next,
    url: 'https://nextjs.org/',
  },
  {
    name: 'Node JS',
    icon: nodejs,
    url: 'https://nodejs.org/en',
  },
  {
    name: 'PHP',
    icon: php,
    url: 'https://www.php.net/',
  },
  {
    name: 'Python',
    icon: python,
    url: 'https://www.python.org/',
  },
  {
    name: 'Java',
    icon: java,
    url: 'https://www.java.com/',
  },
  {
    name: 'MongoDB',
    icon: mongodb,
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'Postgresql',
    icon: postgresql,
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'Firebase',
    icon: firebase,
    url: 'https://firebase.google.com/',
  },
  {
    name: 'GraphQL',
    icon: graphql,
    url: 'https://graphql.org/',
  },
  {
    name: 'git',
    icon: git,
    url: 'https://git-scm.com/',
  },
  {
    name: 'Datadog',
    icon: datadog,
    url: 'https://www.datadoghq.com/',
  },
  {
    name: 'AWS',
    icon: aws,
    url: 'https://aws.amazon.com/',
  },
  {
    name: 'Docker',
    icon: docker,
    url: 'https://www.docker.com/',
  },
  {
    name: 'Kubernetes',
    icon: kubernetes,
    url: 'https://kubernetes.io/',
  },
];

const experiences: TExperience[] = [
  {
    title: 'Senior Software Engineer',
    companyName: 'KeY2Moon Solutions',
    icon: key,
    iconBg: '#',
    date: 'Jul 2024 - Present',
    points: [
      'Led the development of a web3 trading platform',
      'Integrated blockchain-based authentication systems, leveraging MetaMask and WalletConnect for secure and decentralized user onboarding.',
      'Optimized the performance of the trading platform by implementing caching strategies and optimizing database queries.',
      'Wrote test cases and resolved the critical user-reported issues.',
      'Monitored and maintained the trading platform to ensure high availability and performance.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    companyName: 'Digial Air Strike',
    icon: das,
    iconBg: '#fee0ae',
    date: 'Jan 2022 - Jun 2024',
    points: [
      'Lead the development of a dynamic, data-driven dashboard.',
      'Implemented Cloud Services for performance improvement and scalability.',
      'Conducted code review and improved the application stability',
      'Mentored 3 junior developers',
      'Authored clear and concise documentation for code and system design',
    ],
  },
  {
    title: 'Software Engineer',
    companyName: 'PineSucceed Technologies',
    icon: pineSucceed,
    iconBg: '#E6DEDD',
    date: 'Feb 2021 - Dec 2021',
    points: [
      'Architected and developed highly responsive web applications for e-commerce and SaaS platforms.',
      'Solved critical challenges such as user experiences and performance optimization.',
      'Adapted modern technical trends and tools for development.',
      'Implemented modular architecture while project design.',
      'Optimized the data fetching strategies',
      'Collaborated with cross-functional teams with Trello.',
    ],
  },
  {
    title: 'Web Developer',
    companyName: 'DGN Technologies',
    icon: dgn,
    iconBg: '#000000',
    date: 'Nov 2015 - Jan 2021',
    points: [
      'Crafted responsive, accessible and high-performance user interfaces across e-commerce, healthcare and education field.',
      'Collaborated with cross-functional teams using Figma, Jira and Slack',
      'Streamlined version control and development workflows with Git',
      'Deployed and managed web applications on AWS.',
      'Wrote test cases and resolved the critical user-reported issues.',
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
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
    ],
    image: gtx,
    sourceCodeLink: '',
  },
  {
    name: 'TradingGenius',
    description: 'Web application for buy and sell tokens',
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
      {
        name: 'java',
        color: 'blue-text-gradient',
      },
    ],
    image: shuttle,
    sourceCodeLink: '',
  },
];

export { services, technologies, experiences, testimonials, projects };

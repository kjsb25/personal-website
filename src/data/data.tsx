import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Keenan Shumard.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a St. Louis based <strong className="text-stone-100">Full Stack Software Engineer</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'St. Louis, MO', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Interests', text: 'Crosswords, Home Automation, Houseplants', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Missouri - Columbia', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Serverless',
        level: 5,
      },
      {
        name: 'AWS',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2017',
    location: 'University of Missouri - Columbia',
    title: 'BS - Computer Science',
    content: <p></p>,
  },
  {
    date: 'June 2017',
    location: 'University of Missouri - Columbia',
    title: 'BS - Information Technology',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2022 - July 2023',
    location: 'Slalom Consulting',
    title: 'Consultant',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'Jan 2019 - December 2021',
    location: 'The Boeing Company',
    title: 'Software Developer',
    content: (
      <p>
        Internal social network enabling dynamic knowledge management across the enterprise
        <ul>
          <li>Drive full UI overhaul with a focus on increasing user-centricity, including intuitive design,
integration with other Boeing appulcations, and mobile engagement</li>
          <li>Champion successful Agile transformation, enabling increased collective ownership of the product,
collaboration, and empathy within the team</li>
          <li>Migrate and refactor video infrastructure to comply with code standards, increase reliability, and
allow for easier growth into more mature infrastructures</li>
          <li>Lead the team in synthesizing and interpreting user feedback to solve the right problems</li>
        </ul>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'keenan.shumard@gmail.com',
      href: 'mailto:keenan.shumard@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'kjsb25',
      href: 'https://github.com/kjsb25',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/kjsb25'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/keenanshumard'},
];

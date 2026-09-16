import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
} from 'lucide-react';

export const SOCIALS = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/azlan-ahmad-/',
    icon: <LinkedinIcon size={20} className="text-secondary-foreground" />,
  },
  {
    id: 'github',
    title: 'GitHub',
    href: 'https://github.com/Azlan-A1',
    icon: <GithubIcon size={20} className="text-secondary-foreground" />,
  },
  {
    id: 'instagram',
    title: 'Instagram',
    href: 'https://www.instagram.com/azlanahmad/',
    icon: <InstagramIcon size={20} className="text-secondary-foreground" />,
  },
  {
    id: 'twitter',
    title: 'Twitter',
    href: 'https://twitter.com/azlanahmad',
    icon: <TwitterIcon size={20} className="text-secondary-foreground" />,
  },
];

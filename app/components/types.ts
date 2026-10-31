export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: "LinkedIn" | "GitHub" | "Twitter" | "Dev.to" | "YouTube" | "TryHackMe" | "Email" | string;
  href: string;
};

export type HeroStat = {
  value: string;
  label: string;
};

export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  imagePosition?: string;
  link: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  details: ExperienceDetail[];
  tags: string[];
};

export type ExperienceDetail = {
  text: string;
  highlights: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type VolunteeringItem = {
  organization: string;
  role: string;
  period: string;
  details: string;
  tags: string[];
  image?: string;
  imagePosition?: string;
};

export type AchievementItem = {
  title: string;
  organization: string;
  date: string;
  image?: string;
  imagePosition?: string;
};

export type CertificationItem = {
  title: string;
  issuer: string;
  link: string;
};

export type BlogPost = {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tag: string;
  link: string;
  image?: string;
  imagePosition?: string;
};

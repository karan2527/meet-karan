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
  slug: string;
  category: string;
  title: string;
  description: string;
  descriptionHighlights: string[];
  details: ProjectDetail[];
  stack: string[];
  image: string;
  screenshots?: string[];
  imagePosition?: string;
  link: string;
  playStoreLink?: string;
  packageLink?: string;
  imageBadge?: string;
};

export type ProjectDetail = {
  text: string;
  highlights: string[];
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

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  {
    link: "About",
    path: "/about",
  },
  {
    link: "Services",
    path: "/services",
  },
  {
    link: "Projects",
    path: "/projects",
  },
];

export const dataContent = [
  {
    title: "Transform your brand",

    description:
      "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    link: "/blog/id",
    src: "/assets/images/mobile/image-transform.jpg",
    order: 1,
  },
  {
    title: "Stand out to the right audience",

    description:
      "Using a collaborative formula of designers. researchers, photographers, videographers. and copywriters, we'll build and extend your brand in digital places.",
    link: "/blog/id",
    src: "public/assets/images/desktop/image-stand-out.jpg",
    order: 3,
  },
];

export const skillsContent = [
  {
    src: "/assets/images/desktop/image-graphic-design.jpg",
    title: "Graphic Design",
    description:
      "Greate design makes you memorisable. We deliver artwork that underscores your brand message and captures potential clients attention.",
  },
  {
    src: "/assets/images/desktop/image-photography.jpg",
    title: "Photography",
    description:
      "Increase your credibility be getting the most stunning, high-quality photos that improve your buisiness image.",
  },
];

export const testimonials = [
  {
    profile: "/assets/images/image-emily.jpg",
    name: "Emliy R.",
    niche: "Marketing Director",
    description:
      "We pout our trust in sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  {
    profile: "/assets/images/image-thomas.jpg",
    name: "Thomas S..",
    niche: "Chief Operating Officer",
    description:
      "We pout our trust in sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  {
    profile: "/assets/images/image-jennie.jpg",
    name: "Jennie F.",
    niche: "Business Owner",
    description:
      "We pout our trust in sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
];

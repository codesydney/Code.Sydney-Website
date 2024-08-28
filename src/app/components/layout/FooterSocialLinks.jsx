import {
  FaMeetup,
  FaDiscord,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import FooterColumnTitle from "./FooterColumnTitle";

const socialLinksGroup1 = [
  {
    href: "https://discord.gg/yHNKkvMN5e",
    icon: FaDiscord,
    label: "Go to Code.Sydney Discord",
  },
  {
    href: "https://www.meetup.com/Sydney-Volunteer-Programmers/",
    icon: FaMeetup,
    label: "Go to Code.Sydney Meetup.com group",
  },
  {
    href: "https://www.linkedin.com/company/code.sydney/",
    icon: FaLinkedinIn,
    label: "Go to Code.Sydney LinkedIn profile",
  },
  {
    href: "https://www.instagram.com/code.sydney/",
    icon: FaInstagram,
    label: "Go to Code.Sydney Instagram profile",
  },
];
const socialLinksGroup2 = [
  {
    href: "https://www.facebook.com/codesyd/",
    icon: FaFacebookF,
    label: "Go to Code.Sydney Facebook Profile",
  },
  {
    href: "https://twitter.com/code_sydney",
    icon: FaTwitter,
    label: "Go to Code.Sydney Twitter Profile",
  },
  {
    href: "https://www.youtube.com/channel/UCnOp_l8-EX3c-q2Tlj-2Iyw",
    icon: FaYoutube,
    label: "Go to Code.Sydney Youtube channel",
  },
  {
    href: "https://github.com/codesydney",
    icon: FaGithub,
    label: "Go to Code.Sydney Github Profile",
  },
];

const VisuallyHidden = ({ children }) => (
  <span className="sr-only">{children}</span>
);

export default function FooterSocialLinks() {
  return (
    <div className="flex flex-col items-center col-span-2 md:col-span-1 lg:items-end">
      <FooterColumnTitle>Social</FooterColumnTitle>
      <div className="flex flex-wrap justify-center md:flex-col md:items-center lg:items-start">
        <div className="flex">
          {socialLinksGroup1 &&
            socialLinksGroup1.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  className="group relative cursor-pointer block py-1 rounded-full text-custom-light px-2 lg:px-0 lg:pl-4"
                  href={link.href}
                  aria-label={link.label}
                >
                  <IconComponent className="text-3xl group-hover:text-custom-primary transition-all duration-200" />
                  <VisuallyHidden>{link.label}</VisuallyHidden>
                </a>
              );
            })}
        </div>
        <div className="flex">
          {socialLinksGroup2 &&
            socialLinksGroup2.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  className="group relative cursor-pointer block py-1 rounded-full text-custom-light px-2 lg:px-0 lg:pl-4"
                  href={link.href}
                  aria-label={link.label}
                >
                  <IconComponent className="text-3xl group-hover:text-custom-primary transition-all duration-200" />
                  <VisuallyHidden>{link.label}</VisuallyHidden>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
}

import FooterColumnTitle from "./FooterColumnTitle";
import NavLink from "./NavLink";
const footerLinks = [
  {
    text: "Contact us",
    href: "/contact",
  },
  {
    text: "Email us",
    href: "mailto:info@code.sydney",
  },
];

export default function FooterContactLinks({ isActive }) {
  return (
    <div className="flex flex-col items-center lg:items-end">
      <FooterColumnTitle>Get In Touch</FooterColumnTitle>
      <ul>
        {footerLinks &&
          footerLinks.map((footerLink, index) => {
            return (
              <li key={index} className="text-center lg:text-end py-1">
                <NavLink
                  href={footerLink.href}
                  text={footerLink.text}
                  isActive={isActive(footerLink.href)}
                  isButtonStyle={true}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

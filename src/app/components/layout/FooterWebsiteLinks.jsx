import FooterColumnTitle from "./FooterColumnTitle";
import NavLink from "./NavLink";

const footerLinks = [
  {
    text: "BlueHex",
    href: "/bluehex",
  },
  {
    text: "Techies4Good",
    href: "/techies4good",
  },
  {
    text: "Apps4Good",
    href: "/apps4good",
  },
  {
    text: "Portfolios",
    href: "/portfolios",
  },
  {
    text: "Team",
    href: "/team",
  },
];

export default function FooterWebsiteLinks({ isActive }) {
  return (
    <div className="flex flex-col items-center lg:items-end">
      <FooterColumnTitle>Organisation</FooterColumnTitle>
      <ul>
        {footerLinks &&
          footerLinks.map((footerLink, index) => {
            return (
              <li
                key={index}
                className="font-light text-center lg:text-end py-1"
              >
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

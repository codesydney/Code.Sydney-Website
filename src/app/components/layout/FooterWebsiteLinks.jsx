import FooterColumnTitle from "./FooterColumnTitle";
import NavLink from "./NavLink";

export default function FooterWebsiteLinks({ navItems, isActive }) {
  return (
    <div className="flex flex-col items-center lg:items-end">
      <FooterColumnTitle>Organisation</FooterColumnTitle>
      <ul>
        {navItems &&
          navItems.map((footerLink, index) => {
            return (
              <li
                key={index}
                className="font-light text-center lg:text-end py-1"
              >
                <NavLink
                  href={`/${footerLink.slug}`}
                  text={footerLink.label}
                  isActive={isActive(`/${footerLink.slug}`)}
                  isButtonStyle={true}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

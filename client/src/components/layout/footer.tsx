import type { LinkProps, LogoProps } from "@/types";

import Link from "next/link";
//import { usePathname } from "next/navigation";
import { StrapiImage } from "../StrapiImage";

interface FooterProps {
  data: {
    footerLogo: LogoProps;
    footerNavigation: LinkProps[];
    footerPolicies: LinkProps[];
    footerCopy: string;
  };
}

export function Footer({ data }: FooterProps) {
    
//      console.log("++++++");
// console.dir(data, { depth: null });
  if (!data) return null;

  const { footerLogo, footerNavigation, footerPolicies, footerCopy } = data;

  return (
    <footer className="footer">
      <nav className="footer__nav">
        <StrapiImage
          src={footerLogo.logoImage.url}
          alt={footerLogo.logoImage.alternativeText || "No alternative text"}
          width={100}
          height={100}
          className="footer__logo--white"
        />
        <ul className="footer__links">
          {footerNavigation.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                target={item.isExternal ? "_blank" : "_self"}
              >
                {<h5>{item.text}</h5>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {footerPolicies.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                target={item.isExternal ? "_blank" : "_self"}
                className="copy"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <p className="copy">
          &copy; {new Date().getFullYear()} {footerCopy}
        </p>
      </div>
    </footer>
  );
}
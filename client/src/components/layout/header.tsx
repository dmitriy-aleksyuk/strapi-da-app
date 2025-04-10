"use client";
import type { LinkProps, LogoProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StrapiImage } from "../StrapiImage";


interface HeaderProps {
  data: {
    headerLogo: LogoProps;
    headerNavigation: LinkProps[];
    headerCta: LinkProps;
  };
}

export function Header({ data }: HeaderProps) {
  const pathname = usePathname();
  const headerLight = pathname === "/experience";

  if (!data) return null;

  const { headerLogo, headerNavigation, headerCta } = data;
  return (
    <header className={`header ${headerLight ? "header--light" : ""}`}>
      <Link href="/">
        <StrapiImage
          src={headerLogo.logoImage.url}
          alt={headerLogo.logoImage.alternativeText || "No alternative text provided"}
          className={`header__logo header__logo--${
            headerLight ? "white" : "black"
          }`}
          width={120}
          height={120}
        />
      </Link>
      <ul className="header__nav">
        {headerNavigation.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
            >
              <h5>{item.text}</h5>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={headerCta.href} target={headerCta.isExternal ? "_blank" : "_self"}>
        <button className="btn btn--black btn--small">{headerCta.text}</button>
      </Link>
    </header>
  );
}
export interface LinkProps {
    id: number;
    text: string;
    href: string;
    isExternal: boolean;
  }
  
  export interface ImageProps {
    id: number;
    documentId: string;
    url: string;
    alternativeText: string;
  }
  
  export interface LogoProps {
    logoText: string;
    logoImage: ImageProps;
  }
  
  type ComponentType = "blocks.hero-section" | "blocks.info-part";
  
  interface Base<
    T extends ComponentType,
    D extends object = Record<string, unknown>
  > {
    id: number;
    __component?: T;
    documentId?: string;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    data?: D;
  }
  
  export type Block = HeroSectionProps | InfoPartProps;
  
  export interface HeroSectionProps extends Base<"blocks.hero-section"> {
    theme: "green" | "orange";
    heading: string;
    backgroundImage: ImageProps;
    cta?: LinkProps;
    logo?: LogoProps;
    author?: string;
    darken?: boolean;
  }
  
  export interface InfoPartProps extends Base<"blocks.info-part"> {
    theme: "green" | "orange";
    reverse?: boolean;
    headline: string;
    contentEditor: string;
    image: ImageProps;
    cta?: LinkProps;
  }
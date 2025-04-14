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

/** 
 * 1
  * Represents a link in the CMS.
  * @typedef {object} LinkProps
  * @property {number} id - The unique identifier for the link.
  * @property {string} text - The text of the link.
  * @property {string} href - The URL the link points to.
  * @property {boolean} isExternal - Indicates if the link opens in a new tab.
  */
  
type ComponentType =
  "blocks.hero-section"
  | "blocks.info-part"
  | "blocks.featured-article"
  | "blocks.subscribe";

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
  
/**
 * 2
 * Represents a block in the CMS.
 * @typedef {Base} Base
 * @property {number} id - The unique identifier for the block.
 * @property {string} __component - The component type of the block.
 * @property {string} documentId - The document ID of the block.
 * @property {string} createdAt - The creation date of the block.
 * @property {string} updatedAt - The last update date of the block.
 * @property {string} publishedAt - The publication date of the block.
 * @property {D} data - The data associated with the block.
 */  
export type Block =
  HeroSectionProps
  | InfoPartProps
  | FeaturedArticleProps
  | SubscribeProps;
  
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

  export interface FeaturedArticleProps extends Base<"blocks.featured-article"> {
    featureTitle: string;
    featureContent: string;
    featureLink: LinkProps;
    featureImage: ImageProps;
  }
  
  export interface SubscribeProps extends Base<"blocks.subscribe"> {
    subscribeTitle: string;
    subscribeText: string;
    subscribePlaceholder: string;
    subscribeButton: string;
  }
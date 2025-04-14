import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeaturedArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_articles';
  info: {
    description: '';
    displayName: 'Featured Article';
  };
  attributes: {
    featureContent: Schema.Attribute.RichText;
    featureImage: Schema.Attribute.Media<'images'>;
    featureLink: Schema.Attribute.Component<'elements.link', false>;
    featureTitle: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'Hero section';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    theme: Schema.Attribute.Enumeration<['green', 'orange']>;
  };
}

export interface BlocksInfoPart extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_parts';
  info: {
    description: '';
    displayName: 'Info part';
  };
  attributes: {
    contentEditor: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'elements.link', false>;
    headLine: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    theme: Schema.Attribute.Enumeration<['green ', 'orange']>;
  };
}

export interface BlocksSubscribe extends Struct.ComponentSchema {
  collectionName: 'components_blocks_subscribes';
  info: {
    displayName: 'Subscribe';
  };
  attributes: {
    subscribeButton: Schema.Attribute.String;
    subscribePlaceholder: Schema.Attribute.String;
    subscribeText: Schema.Attribute.Text;
    subscribeTitle: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    footerCopy: Schema.Attribute.String;
    footerLogo: Schema.Attribute.Component<'elements.logo', false>;
    footerNavigation: Schema.Attribute.Component<'elements.link', true>;
    footerPolicies: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    headerCta: Schema.Attribute.Component<'elements.link', false>;
    headerLogo: Schema.Attribute.Component<'elements.logo', false>;
    headerNavigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.featured-article': BlocksFeaturedArticle;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-part': BlocksInfoPart;
      'blocks.subscribe': BlocksSubscribe;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}

import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    theme: Schema.Attribute.Enumeration<['green', 'orange']>;
  };
}

export interface BlocksInfoPart extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_parts';
  info: {
    displayName: 'Info part';
  };
  attributes: {
    contentEditor: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'elements.link', false>;
    headLine: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    theme: Schema.Attribute.Enumeration<['green orangs']>;
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
    displayName: 'Logo';
  };
  attributes: {
    logoImage: Schema.Attribute.Media<'images', true>;
    logoText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-part': BlocksInfoPart;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}

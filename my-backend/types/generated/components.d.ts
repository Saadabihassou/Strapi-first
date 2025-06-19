import type { Schema, Struct } from '@strapi/strapi';

export interface FooterQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_quick_links';
  info: {
    displayName: 'quickLinks';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface FooterSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'socialLinks';
  };
  attributes: {
    iconName: Schema.Attribute.String;
    iconUrl: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface NavbarButton extends Struct.ComponentSchema {
  collectionName: 'components_navbar_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface NavbarLink extends Struct.ComponentSchema {
  collectionName: 'components_navbar_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.quick-links': FooterQuickLinks;
      'footer.social-links': FooterSocialLinks;
      'navbar.button': NavbarButton;
      'navbar.link': NavbarLink;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}

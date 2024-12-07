import type { Schema, Struct } from '@strapi/strapi';

export interface FloraFlora extends Struct.ComponentSchema {
  collectionName: 'components_flora_floras';
  info: {
    displayName: 'Flora';
  };
  attributes: {
    Cover: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Name: Schema.Attribute.String;
  };
}

export interface WildlifeWildlife extends Struct.ComponentSchema {
  collectionName: 'components_wildlife_wildlife';
  info: {
    displayName: 'Wildlife';
  };
  attributes: {
    Cover: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'flora.flora': FloraFlora;
      'wildlife.wildlife': WildlifeWildlife;
    }
  }
}

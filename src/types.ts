export type GetDataType<T> = {
  data: T[];
  meta: Meta;
};

export type MembersType = {
  id: number;
  attributes: PurpleAttributes;
};

export type ArticlesType = {
  id: number;
  attributes: ArticlesAttribute;
};

export type ArticlesAttribute = {
  title: string;
  content: Content[];
  date: string;
  createdAt: string;
  updatedAt: Date;
  publishedAt: Date;
  readTime: string;
  description: string;
  image: Picture;
  member: Member;
  name: string;
  slug: string;
};

export type Content = {
  level: number;
  type: TypeText;
  children: Chlidren[];
  image: DataAttributes;
};

export enum TypeText {
  HEADING = "heading",
  PARAGRAPH = "paragraph",
  TEXT = "text",
  LINK = "link",
  IMAGE = "image",
  QUOTE = "quote",
  CODE = "code",
  LIST = "list-item",
}

export enum HeroStatsText {
  MEMBERS = "Collaborateurs de l'entreprise",
  ARTICLES = "Articles partagés",
  EVENTS = "Événements partagés",
}

export type Chlidren = {
  text: string;
  italic: boolean;
  underline: boolean;
  bold: boolean;
  type: TypeText;
  url: string;
  children: Chlidren[];
};

export type PurpleAttributes = {
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  fullName: string;
  job: string;
  linkedin: string;
  slug: string;
  GitHub: string;
  picture: Picture;
  articles: Articles;
};

export type Articles = {
  data: ArticlesType[];
};

export type ArticlesDatum = {
  id: number;
  attributes: FluffyAttributes;
};

export type Member = {
  data: MemberData;
};

export type MemberData = {
  id: number;
  attributes: PurpleAttributes;
};

export type FluffyAttributes = {
  title: string;
  content: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type Picture = {
  data: Data;
};

export type Data = {
  id: number;
  attributes: DataAttributes;
};

export type DataAttributes = {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
};

export enum EXT {
  JPEG = ".jpeg",
  PNG = ".png",
}

export type Formats = {
  thumbnail: Large;
  small?: Large;
  medium?: Large;
  large?: Large;
};

export type Large = {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
};

export enum MIME {
  ImageJPEG = "image/jpeg",
  ImagePNG = "image/png",
}

export type Meta = {
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type EventsType = {
  id: number;
  attributes: Attributes;
};

export type Attributes = {
  eventName: string;
  date: string;
  eventLink: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};

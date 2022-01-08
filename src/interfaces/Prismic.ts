export interface IAtom {
  type: string;
  text: string;
  spans: any[];
}
export enum EAtomType {
  PARAGRAPH = "paragraph",
  PREFORMATTED = "preformatted",
  LIST_ITEM = "list-item",
  O_LIST_ITEM = "o-list-item",
  IMAGE = "image",
  EMBED = "embed",
  HYPERLINK = "hyperlink",
  HEADING1 = "heading1",
  HEADING2 = "heading2",
  HEADING3 = "heading3",
  HEADING4 = "heading4",
  HEADING5 = "heading5",
  HEADING6 = "heading6",
}
export interface IAtomImage extends IAtom {
  url: string;
  dimensions: {
    width: number;
    height: number;
  };
  alt: string;
  copyright: string | null;
}
export interface IAtomOembed extends IAtom {
  type: string;
  embed_url: string;
  title: string;
  width: number;
  height: number;
  thumbnail_width: number;
  thumbnail_height: number;
  author_name: string;
  author_url: string;
  provider_name: string;
  provider_url: string;
}
export interface IAtomEmbed extends IAtom {
  oembed: IAtomOembed;
}
export interface IHyperlinkData {
  url: string;
  link_type: string;
  target: string;
}
export interface ISlice {
  slice_type: ESliceType;
  slice_label: string | null;
  items: any[];
  primary: any;
}
export enum ESliceType {
  UNORDERED_LIST = "unordered_list",
  RICH_TEXT = "rich_text",
}

export interface ISpan {
  start: number;
  end: number;
  type: ESpanType;
  data: any;
}

export enum ESpanType {
  HYPERLINK = "hyperlink",
  STRONG = "strong",
}

export interface IHero {
  name: string;
  prelude: string;
  tags: { tag: string }[];
  introduction: IAtom[];
}

export interface IExperience {
  id: string;
  start_date: string;
  active: boolean;
  end_date: string;
  job_title: string;
  entity_name: string;
  entity_short_name: string;
  is_other: boolean;
  body: ISlice[];
}

export interface IExperienceMeta {
  experience_view_title: string;
  experience_order: {
    experience: {
      id: string;
    };
  }[];
}

export interface IProject {
  id: string;
  project_name: string;
  is_featured: boolean;
  tech_stack: any[];
  links: any[];
  creation_date: string;
  latest_version: string;
  picture_src: string;
  picture_alt: string;
  body: ISlice[];
}

export interface IProjectMeta {
  projects_view_title: string;
  project_order: {
    project: {
      id: string;
    };
  }[];
}

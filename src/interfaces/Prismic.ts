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
export enum ESliceType {}

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

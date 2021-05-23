declare interface IMusicBriefInfo {
  musicImgSrc: string | null;
  musicName: string | null;
  musicAuthor: Array<string>;
}
declare interface IBannerItem {
  imageUrl: string;
  scm: string;
  url: string;
  typeTitle: string;
  targetId: number;
  targetType: number;
}

declare interface ISongListItem {
  id: number;
  name: string;
  copywriter: string;
  picUrl: string;
  playCount: number;
  trackCount: number;
}
declare interface IArtist {
  id: number;
  img1v1Url: string;
  name: string;
  picUrl: string;
}
declare interface IAlbum {
  alias: Array<string>;
  artists: Array<IArtist>;
  company: string;
  companyId: number;
  id: number;
  name: string;
  picUrl: string;
  blurPicUrl: string;
  subType: string;
}
declare interface IHotMovie {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
  artists: Array<{id: number; name: string}>
}
declare interface ISong {
  alias: Array<string>;
  album: IAlbum;
  artists: Array<IArtist>;
  duration: number;
  name: string;
  id: number;
  mp3Url: string
}
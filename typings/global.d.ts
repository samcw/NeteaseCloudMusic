declare interface IMusicBriefInfo {
  musicImgSrc: string | null;
  musicName: string | null;
  musicAuthor: Array<string>
}
declare interface IBannerItem {
  imageUrl: string,
  scm: string,
  url: string,
  typeTitle: string,
  targetId: number,
  targetType: number
}

declare interface ISongListItem {
  id: number,
  name: string,
  copywriter: string,
  picUrl: string,
  playCount: number,
  trackCount: number
}
export default function PlayBrief({
  musicBriefInfo,
  isCollected,
}: {
  musicBriefInfo: IMusicBriefInfo;
  isCollected: boolean;
}) {
  return (
    <div>
      <div>
        <img src={musicBriefInfo.musicImgSrc} alt="musicImgSrc" />
      </div>
    </div>
  );
}

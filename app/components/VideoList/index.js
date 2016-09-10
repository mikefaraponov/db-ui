import './styles';
import VideoListElement from '../VideoListElement'
const toListElement = (video, key) => <VideoListElement video={video} key={key}/>;
const VideoList = ({videos, wait, errMsg}) => {
  return (
    <ul className="VideoList">
      {
        wait?
        <div className="VideosAreLoading">Is loading...</div>:
        errMsg? 
        <div className="ErrorLoadVideo">Error happened!</div>:
        videos.length?
        videos.map(toListElement):
        <div className="EmptyVideoList">Find your way</div>
      }
    </ul>
  );
}

export default VideoList;
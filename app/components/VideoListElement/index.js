import './styles';
// 39ZfjX9qmwo

const VideoListElement = ({video}) => {
  return (
    <li className="VideoListElementWrapper">
      <iframe
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        className="VideoListElement"
        allowFullScreen 
      />
    </li>
  );
};

export default VideoListElement;
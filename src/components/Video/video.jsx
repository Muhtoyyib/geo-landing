import adVid from "../../assets/video.mp4"

function Video() {
  return (
    <div className="video-container">
      <video autoPlay muted controls width='80%'>
        <source src={adVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;

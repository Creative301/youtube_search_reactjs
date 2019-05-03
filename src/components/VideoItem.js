import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  // get the video title
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      {/* Get the video thumbnails. Check the location from Network > XHR > search? */}
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;

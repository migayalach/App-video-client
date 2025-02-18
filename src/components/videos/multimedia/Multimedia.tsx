import React from "react";
import YoutubePlayer from "react-player/youtube";

function Multimedia({ url }: { url: string }) {
  return (
    <div>
      <YoutubePlayer url={url} controls loop playing />
    </div>
  );
}

export default Multimedia;

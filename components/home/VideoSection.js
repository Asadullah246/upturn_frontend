import React from "react";

import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div>
      <ReactPlayer
        url="https://youtu.be/fvf3e1Ae9w4?si=ei5UXazrqSEnLtsK"
        controls={true}
        width="100%"
        height="60vw"
        // playIcon={true}
      />
    </div>
  );
};

export default VideoSection;
